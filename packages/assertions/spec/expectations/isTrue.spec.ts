import { expect } from '@integration/testing-tools';
import { actorCalled, AssertionError } from '@serenity-js/core';
import { describe, it } from 'mocha';

import { Ensure, isTrue } from '../../src';

describe('isTrue', () => {

    it('allows for the actor flow to continue when the "actual" is true', () => {
        return expect(actorCalled('Astrid').attemptsTo(
            Ensure.that(true, isTrue()),
        )).to.be.fulfilled;
    });

    it('breaks the actor flow when "actual" is not true', () => {
        return expect(actorCalled('Astrid').attemptsTo(
            Ensure.that(false, isTrue()),
        )).to.be.rejectedWith(AssertionError, `Expected false to equal true`)
            .then((error: AssertionError) => {
                expect(error.expected).to.equal(true);
                expect(error.actual).to.equal(false);
            });
    });

    it('contributes to a human-readable description', () => {
        expect(Ensure.that(true, isTrue()).toString())
            .to.equal(`#actor ensures that true does equal true`);
    });
});
