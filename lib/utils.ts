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

import * as fs from 'fs-extra';
import { By } from 'selenium-webdriver';
import { Collection } from './collection';
import { Driver } from './driver';
import { Element } from './element';
import { With } from './with';


export namespace Utils {

    export async function savePageSource(selenideDriver: Driver, filePath: string): Promise<string> {
        const pageTitle = await selenideDriver.title();
        const dateTime = new Date().toLocaleString().replace(/ |:|-/g, '_');
        const fileName = `${pageTitle}_${dateTime}.html`;
        const completeFilePath = `${filePath}/${fileName}`;
        const pageSource = await selenideDriver.pageSource();
        fs.outputFileSync(completeFilePath, pageSource);
        return completeFilePath;
    }

    export async function saveScreenshot(selenideDriver: Driver, filePath: string): Promise<string> {
        const pageTitle = await selenideDriver.title();
        const dateTime = new Date().toLocaleString().replace(/ |:|-/g, '_');
        const fileName = `${pageTitle}_${dateTime}.png`;
        const completeFilePath = `${filePath}/${fileName}`;
        const screenshot = await selenideDriver.screenshot();
        fs.outputFileSync(completeFilePath, screenshot);
        return completeFilePath;
    }

    export function toBy(cssOrXpathOrBy: string | By): By {
        return (typeof cssOrXpathOrBy === 'string')
            ? cssOrXpathOrBy.includes('/') ? With.xpath(cssOrXpathOrBy) : With.css(cssOrXpathOrBy)
            : cssOrXpathOrBy;
    }

    export function getDriver(entity: Element | Collection): Driver {
        /* tslint:disable:no-string-literal */
        const driver = entity['driver'];
        /* tslint:enable:no-string-literal */
        return driver;
    }

}
