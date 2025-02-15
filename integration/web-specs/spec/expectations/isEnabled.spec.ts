import 'mocha';

import { expect } from '@integration/testing-tools';
import { Ensure } from '@serenity-js/assertions';
import { actorCalled, AssertionError, Wait } from '@serenity-js/core';
import { By, isEnabled, Navigate, PageElement, PageElements } from '@serenity-js/web';

describe('isEnabled', function () {

    const Elements = {
        nonExistent:            () => PageElement.located(By.id('does-not-exist')).describedAs('non-existent element'),
        nonExistentElements:    () => PageElements.located(By.id('does-not-exist')).describedAs('non-existent elements'),
        enabledButton:          () => PageElement.located(By.id('enabled')).describedAs('the enabled button'),
        disabledButton:         () => PageElement.located(By.id('disabled')).describedAs('the disabled button'),
    };

    beforeEach(() =>
        actorCalled('Wendy').attemptsTo(
            Navigate.to('/expectations/is-enabled/buttons.html'),
        ));

    describe('resolves to true when the element', () => {

        /** @test {isEnabled} */
        it('is enabled', () =>
            expect(actorCalled('Wendy').attemptsTo(
                Wait.until(Elements.enabledButton(), isEnabled()),
                Ensure.that(Elements.enabledButton(), isEnabled()),
            )).to.be.fulfilled);
    });

    describe('resolves to false when the element', () => {

        /** @test {isEnabled} */
        it('is disabled', () =>
            expect(actorCalled('Wendy').attemptsTo(
                Ensure.that(Elements.disabledButton(), isEnabled()),
            )).to.be.rejectedWith(AssertionError, `Expected the disabled button to become enabled`));

        /** @test {isActive} */
        it('does not exist', () =>
            expect(actorCalled('Wendy').attemptsTo(
                Ensure.that(Elements.nonExistent(), isEnabled()),
            )).to.be.rejectedWith(AssertionError, `Expected non-existent element to become present`));

        /** @test {isActive} */
        it('does not exist in a list of PageElements', () =>
            expect(actorCalled('Wendy').attemptsTo(
                Ensure.that(Elements.nonExistentElements().first(), isEnabled()),
            )).to.be.rejectedWith(AssertionError, `Expected the first of non-existent elements to become present`));
    });

    /** @test {isEnabled} */
    it('contributes to a human-readable description of an assertion', () => {
        expect(Ensure.that(Elements.enabledButton(), isEnabled()).toString())
            .to.equal(`#actor ensures that the enabled button does become enabled`);
    });

    /** @test {isEnabled} */
    it('contributes to a human-readable description of a wait', () => {
        expect(Wait.until(Elements.enabledButton(), isEnabled()).toString())
            .to.equal(`#actor waits up to 5s, polling every 500ms, until the enabled button does become enabled`);
    });
});
