import { assert, spy } from 'sinon';
import { expect } from 'chai';
import * as dispatcher from 'source/browser/events';

describe('browser/events', () => {
	beforeEach(() => {
		this.listener = spy();
		this.element = document.createElement('div');
		document.body.appendChild(this.element);
	});

	afterEach(() => {
		dispatcher.off();
		this.element.parentElement.removeChild(this.element);
		delete this.listener;
		delete this.element;
	});

	describe('#on', () => {
		it('should invoke the listener with a Event argument multiple times', () => {
			dispatcher.on(this.element, 'popstate', this.listener);
			dispatcher.emit(this.element, 'popstate popstate popstate');
			expect(this.listener.called).to.be.true;
			expect(this.listener.calledOnce).to.be.false;
			expect(this.listener.callCount).to.be.equal(3);
			for (let ix = 0; ix < this.listener.callCount; ix += 1) {
				const args = this.listener.getCall(ix).args;
				expect(args.length).to.be.at.least(1);
				expect(args[0]).to.be.instanceOf(Event);
				expect(Object.prototype.hasOwnProperty.call(args[0], 'state')).to.be.true;
			}
		});
	});

	describe('#one', () => {
		it('should invoke the listener with a Event argument one', () => {
			expect(this.listener).to.be.spy;
			dispatcher.one(this.element, 'popstate', this.listener);
			dispatcher.emit(this.element, 'popstate popstate popstate');
			expect(this.listener.called).to.be.true;
			expect(this.listener.calledOnce).to.be.true;
			const args = this.listener.getCall(0).args;
			expect(args.length).to.be.at.least(1);
			expect(args[0]).to.be.instanceOf(Event);
			expect(Object.prototype.hasOwnProperty.call(args[0], 'state')).to.be.true;
		});
	});

	describe('#off', () => {
		it('should remove an specific event handler from a specific element', () => {
			expect(this.listener).to.be.spy;
			dispatcher.on(this.element, 'popstate changestate pushstate', this.listener);
			dispatcher.off(this.element, 'pushstate', this.listener); // <= specific listener
			dispatcher.emit(this.element, 'popstate changestate pushstate');
			expect(this.listener.callCount).to.be.equal(2);
		});

		it('should remove all event handlers from a specific element', () => {
			expect(this.listener).to.be.spy;
			dispatcher.on(this.element, 'pushstate popstate changestate', this.listener);
			dispatcher.off(this.element); // <= all types
			dispatcher.emit(this.element, 'popstate changestate pushstate');
			expect(this.listener.callCount).to.be.equal(0);
		});

		it('should remove all event handlers from a specific element by type', () => {
			const anotherListener = spy();
			expect(this.listener).to.be.spy;
			dispatcher.on(this.element, 'pushstate popstate changestate', this.listener);
			dispatcher.on(this.element, 'pushstate', anotherListener);
			dispatcher.off(this.element, 'pushstate'); // <= all pushstate listeners from this.element
			dispatcher.emit(this.element, 'popstate changestate pushstate');
			expect(this.listener.callCount).to.be.equal(2);
			expect(anotherListener.callCount).to.be.equal(0);
		});

		it('should remove all event handlers', () => {
			const anotherListener = spy();
			expect(this.listener).to.be.spy;
			dispatcher.on(document, 'DOMContentLoaded', this.listener);
			dispatcher.on(window, 'changestate', this.listener);
			dispatcher.on(this.element, 'pushstate', anotherListener);
			dispatcher.on(this.element, 'pushstate', this.listener);
			dispatcher.off(); // <= all types and elements
			dispatcher.emit(document, 'DOMContentLoaded');
			dispatcher.emit(window, 'changestate');
			dispatcher.emit(this.element, 'pushstate');
			expect(this.listener.callCount).to.be.equal(0);
		});

		it('should remove all event handlers by type', () => {
			const anotherListener = spy();
			expect(this.listener).to.be.spy;
			dispatcher.on(document, 'DOMContentLoaded', this.listener);
			dispatcher.on(window, 'changestate', this.listener);
			dispatcher.on(this.element, 'pushstate', anotherListener);
			dispatcher.on(this.element, 'pushstate', this.listener);
			dispatcher.off('pushstate'); // <= all listeners from 'pushstates' type from all elements
			dispatcher.emit(document, 'DOMContentLoaded');
			dispatcher.emit(window, 'changestate');
			dispatcher.emit(this.element, 'pushstate');
			expect(anotherListener.callCount).to.be.equal(0);
			expect(this.listener.callCount).to.be.equal(2);
		});
	});

	describe('#emit', () => {
		it('should invoke the listener', () => {
			expect(this.listener).to.be.spy;
			dispatcher.on(this.element, 'popstate', this.listener);
			dispatcher.emit(this.element, 'popstate');
			expect(this.listener.called).to.be.true;
		});

		it('should pass arguments to the listeners', () => {
			expect(this.listener).to.be.spy;
			dispatcher.on(this.element, 'popstate', this.listener);
			dispatcher.emit(this.element, 'popstate', { foo: 'foo', bar: 1, baz: {} });
			assert.calledOnce(this.listener);
			const args = this.listener.getCall(0).args;
			expect(args.length).to.be.at.least(1);
			expect(args[0]).to.be.instanceOf(Event);
			expect(Object.prototype.hasOwnProperty.call(args[0], 'state')).to.be.true;
			expect(args[0].state).to.be.an('object');
			expect(args[0].state).to.have.property('foo').to.be.a('string');
			expect(args[0].state).to.have.property('bar').to.be.a('number');
			expect(args[0].state).to.have.property('baz').to.be.an('object');
		});

		it('should emit all events', () => {
			['popstate', 'changestate', 'hashchange'].map((eventType) => {
				const listener = spy();
				dispatcher.on(this.element, eventType, listener);
				dispatcher.emit();
				return listener;
			}).forEach((listener, index, spies) => {
				expect(listener.callCount).to.be.equal(spies.length - index);
			});
		});
	});

	describe('#willEmit', () => {
		it([
			'should check whether an event listener is registered with this `dom-event-dispatcher`',
			'object or any of its ancestors for the specified event type',
		].join(' '), () => {
			expect(this.listener).to.be.spy;
			dispatcher.on(window, 'changestate', this.listener);
			expect(dispatcher.willEmit('changestate popstate')).to.be.true;
			expect(dispatcher.willEmit('foo bar baz')).to.be.false;
			expect(dispatcher.willEmit('changestate')).to.be.true;
			expect(dispatcher.willEmit('popstate')).to.be.false;
		});
	});

	describe('#hasEvent', () => {
		it([
			'should check whether the `dom-event-dispatcher` object has any listeners',
			'registered for a specific type of event',
		].join(' '), () => {
			expect(this.listener).to.be.spy;
			dispatcher.on(window, 'changestate', this.listener);
			expect(dispatcher.hasEvent(window, 'changestate popstate')).to.be.true;
			expect(dispatcher.hasEvent(window, 'foo bar baz')).to.be.false;
			expect(dispatcher.hasEvent(window, 'changestate')).to.be.true;
			expect(dispatcher.hasEvent(window, 'popstate')).to.be.false;
		});
	});
});
