import { expect } from '@integration/testing-tools';
import { actorCalled, AssertionError } from '@serenity-js/core';
import { describe, it } from 'mocha';

import { and, endsWith, Ensure, startsWith } from '../../src';

describe('and', () => {

    it('allows for the actor flow to continue when the "actual" meets all the expectations', () => {
        return expect(actorCalled('Astrid').attemptsTo(
            Ensure.that('Hello World!', and(startsWith('Hello'), endsWith('World!'))),
        )).to.be.fulfilled;
    });

    describe('breaks the actor flow when "actual"', () => {

        it('does not meet the first expectation', () => {
            return expect(actorCalled('Astrid').attemptsTo(
                Ensure.that('Hello World!', and(startsWith('¡Hola'), endsWith('World!'))),
            )).to.be.rejectedWith(AssertionError, `Expected 'Hello World!' to start with '¡Hola'`)
                .then((error: AssertionError) => {
                    expect(error.expected.toString()).to.equal('¡Hola');
                    expect(error.actual).to.equal('Hello World!');
                });
        });

        it('does not meet the second expectation', () => {
            return expect(actorCalled('Astrid').attemptsTo(
                Ensure.that('Hello World!', and(startsWith('Hello'), endsWith('Mundo!'))),
            )).to.be.rejectedWith(AssertionError, `Expected 'Hello World!' to end with 'Mundo!`)
                .then((error: AssertionError) => {
                    expect(error.expected.toString()).to.equal('Mundo!');
                    expect(error.actual).to.equal('Hello World!');
                });
        });
    });

    it('contributes to a human-readable description', () => {
        expect(Ensure.that('Hello', and(startsWith('H'), endsWith('o'))).toString())
            .to.equal(`#actor ensures that 'Hello' does start with 'H' and end with 'o'`);
    });
});
