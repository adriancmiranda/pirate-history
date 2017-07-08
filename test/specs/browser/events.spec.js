import sinon from 'sinon';
import * as dispatcher from 'source/browser/events';

describe('browser/events', () => {
	let listener;
	let element;

	beforeEach(() => {
		listener = sinon.spy();
		element = document.createElement('div');
		document.body.appendChild(element);
	});

	afterEach(() => {
		dispatcher.off();
		element.parentElement.removeChild(element);
		listener = undefined;
		element = undefined;
	});

	describe('#on', () => {
		it('should invoke the listener with a Event argument multiple times', () => {
			dispatcher.on(element, 'popstate', listener);
			dispatcher.emit(element, 'popstate popstate popstate');
			expect(listener.called).toBeTruthy();
			expect(listener.calledOnce).toBeFalsy();
			expect(listener.callCount).toEqual(3);
			for (let ix = 0; ix < listener.callCount; ix += 1) {
				const { args } = listener.getCall(ix);
				expect(args.length).toBeGreaterThan(0);
				expect(args[0] instanceof Event).toBe(true);
				expect(Object.prototype.hasOwnProperty.call(args[0], 'detail')).toBe(true);
			}
		});
	});

	describe('#one', () => {
		it('should invoke the listener with a Event argument one', () => {
			expect(listener).toEqual(jasmine.any(Function));
			dispatcher.one(element, 'popstate', listener);
			dispatcher.emit(element, 'popstate popstate popstate');
			expect(listener.called).toBeTruthy();
			expect(listener.calledOnce).toBeTruthy();
			const { args } = listener.getCall(0);
			expect(args.length).toBeGreaterThan(0);
			expect(args[0] instanceof Event).toBe(true);
			expect(Object.prototype.hasOwnProperty.call(args[0], 'detail')).toBe(true);
		});
	});

	describe('#off', () => {
		it('should remove an specific event handler from a specific element', () => {
			expect(listener).toEqual(jasmine.any(Function));
			dispatcher.on(element, 'popstate changestate pushstate', listener);
			dispatcher.off(element, 'pushstate', listener); // <= specific listener
			dispatcher.emit(element, 'popstate changestate pushstate');
			expect(listener.callCount).toEqual(2);
		});

		it('should remove all event handlers from a specific element', () => {
			expect(listener).toEqual(jasmine.any(Function));
			dispatcher.on(element, 'pushstate popstate changestate', listener);
			dispatcher.off(element); // <= all types
			dispatcher.emit(element, 'popstate changestate pushstate');
			expect(listener.callCount).toEqual(0);
		});

		it('should remove all event handlers from a specific element by type', () => {
			const anotherListener = sinon.spy();
			expect(listener).toEqual(jasmine.any(Function));
			dispatcher.on(element, 'pushstate popstate changestate', listener);
			dispatcher.on(element, 'pushstate', anotherListener);
			dispatcher.off(element, 'pushstate'); // <= all pushstate listeners from element
			dispatcher.emit(element, 'popstate changestate pushstate');
			expect(listener.callCount).toEqual(2);
			expect(anotherListener.callCount).toEqual(0);
		});

		it('should remove all event handlers', () => {
			const anotherListener = sinon.spy();
			expect(listener).toEqual(jasmine.any(Function));
			dispatcher.on(document, 'DOMContentLoaded', listener);
			dispatcher.on(window, 'changestate', listener);
			dispatcher.on(element, 'pushstate', anotherListener);
			dispatcher.on(element, 'pushstate', listener);
			dispatcher.off(); // <= all types and elements
			dispatcher.emit(document, 'DOMContentLoaded');
			dispatcher.emit(window, 'changestate');
			dispatcher.emit(element, 'pushstate');
			expect(listener.callCount).toEqual(0);
		});

		it('should remove all event handlers by type', () => {
			const anotherListener = sinon.spy();
			expect(listener).toEqual(jasmine.any(Function));
			dispatcher.on(document, 'DOMContentLoaded', listener);
			dispatcher.on(window, 'changestate', listener);
			dispatcher.on(element, 'pushstate', anotherListener);
			dispatcher.on(element, 'pushstate', listener);
			dispatcher.off('pushstate'); // <= all listeners from 'pushstates' type from all elements
			dispatcher.emit(document, 'DOMContentLoaded');
			dispatcher.emit(window, 'changestate');
			dispatcher.emit(element, 'pushstate');
			expect(anotherListener.callCount).toEqual(0);
			expect(listener.callCount).toEqual(2);
		});
	});

	describe('#emit', () => {
		it('should invoke the listener', () => {
			expect(listener).toEqual(jasmine.any(Function));
			dispatcher.on(element, 'popstate', listener);
			dispatcher.emit(element, 'popstate');
			expect(listener.called).toBeTruthy();
		});

		it('should pass arguments to the listeners', () => {
			const type = 'popstate';
			const state = { foo: 'foo', bar: 1, baz: {} };
			expect(listener).toEqual(jasmine.any(Function));
			dispatcher.on(element, type, listener);
			dispatcher.emit(element, type, { detail: { state } });
			sinon.assert.calledOnce(listener);
			const { args } = listener.getCall(0);
			expect(args.length).toBeGreaterThan(0);
			expect(args[0] instanceof Event).toBe(true);
			expect(args[0].detail).toEqual(jasmine.any(Object));
			expect(args[0].detail.state).toEqual(state);
			expect(args[0].type).toEqual(type); // <= crossbrowser
		});

		it('should emit all events', () => {
			['popstate', 'changestate', 'hashchange'].map((eventType) => {
				const singleListener = sinon.spy();
				dispatcher.on(element, eventType, singleListener);
				dispatcher.emit();
				return singleListener;
			}).forEach((listenerRef, index, spies) => {
				expect(listenerRef.callCount).toEqual(spies.length - index);
			});
		});
	});

	describe('#willEmit', () => {
		it([
			'should check whether an event listener is registered with this `dom-event-dispatcher`',
			'object or any of its ancestors for the specified event type',
		].join(' '), () => {
			expect(listener).toEqual(jasmine.any(Function));
			dispatcher.on(window, 'changestate', listener);
			expect(dispatcher.willEmit('changestate popstate')).toBe(true);
			expect(dispatcher.willEmit('foo bar baz')).toBe(false);
			expect(dispatcher.willEmit('changestate')).toBe(true);
			expect(dispatcher.willEmit('popstate')).toBe(false);
		});
	});

	describe('#hasEvent', () => {
		it([
			'should check whether the `dom-event-dispatcher` object has any listeners',
			'registered for a specific type of event',
		].join(' '), () => {
			expect(listener).toEqual(jasmine.any(Function));
			dispatcher.on(window, 'changestate', listener);
			expect(dispatcher.hasEvent(window, 'changestate popstate')).toBe(true);
			expect(dispatcher.hasEvent(window, 'foo bar baz')).toBe(false);
			expect(dispatcher.hasEvent(window, 'changestate')).toBe(true);
			expect(dispatcher.hasEvent(window, 'popstate')).toBe(false);
			expect(dispatcher.hasEvent(window, 'anon')).toBe(false);
		});
	});
});
