// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Browser } from '../../lib/browser';
import { Given } from '../utils/given';
import { When } from '../utils/when';
import './base';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

describe('Element search', () => {

    it('initialization does not perform actual search', async () => {
        const element = Browser.element('#not-existing-element-id');

        expect(element.toString()).toBeTruthy();
    });

    // TODO is's are not actions, we need o rename it somehow
    it('should be postponed until action required', async () => {
        await Given.openedEmptyPageWithBody('<h1 id="will-be-existing-element-id">Hello kitty:*</h1>');

        expect(await Browser.element('#will-be-existing-element-id').isVisible()).toBe(true);
    });

    // TODO is's are not actions, we need o rename it somehow
    it('should be performed on each action', async () => {
        await Given.openedEmptyPage();

        await When.withBody('<h1 id="will-be-existing-element-id">Hello kitty:*</h1>');
        expect(await Browser.element('#will-be-existing-element-id').isVisible()).toBe(true);

        await When.withBody('<h1 id=\'will-be-existing-element-id\' style=\'display:none\'>Hello kitty:*</h1>');
        expect(await Browser.element('#will-be-existing-element-id').isVisible()).toBe(false);
    });

    it('should fail on timeout during waiting for visibility on actions', async () => {
        Browser.configuration.timeout = 1;
        await Given.openedEmptyPageWithBody(`
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h2 id='second'>Heading 2</h2>
        `);
        await Browser.executeScript(
            'setTimeout(_ => { document.getElementsByTagName("a")[0].style = "display:block"; }, 5000);'
        );

        await Browser.element('a').click().then(
            () => fail('should fail on timeout before can be clicked'),
            async error => expect(await Browser.url()).not.toContain('second')
        );
    });

});
