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

import { By, WebElement } from 'selenium-webdriver';
import { ElementNotFoundError } from '../errors/elementNotFoundError';
import { Locator } from './locator';
import { SearchContext } from './searchContext';


export class ByWebElementLocator implements Locator<WebElement> {

    private readonly by: By;
    private readonly context: SearchContext;

    constructor(by: By, context: SearchContext) {
        this.by = by;
        this.context = context;
    }

    async find(): Promise<WebElement> {
        const elements = await this.context.findElements(this.by);

        if (elements.length === 0) {
            throw new ElementNotFoundError(`No elements found using ${this.toString()}`);
        }

        return elements[0];
    }

    toString(): string {
        return `${this.context.toString()}.find(${this.by})`;
    }

}
