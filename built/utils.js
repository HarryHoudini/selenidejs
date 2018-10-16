"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const with_1 = require("./with");
var Utils;
(function (Utils) {
    async function savePageSource(selenideDriver, filePath) {
        const pageTitle = await selenideDriver.title();
        const dateTime = new Date().toLocaleString().replace(/ |:|-/g, '_');
        const fileName = `${pageTitle}_${dateTime}.html`;
        const completeFilePath = `${filePath}/${fileName}`;
        const pageSource = await selenideDriver.pageSource();
        fs.outputFileSync(completeFilePath, pageSource);
        return completeFilePath;
    }
    Utils.savePageSource = savePageSource;
    async function saveScreenshot(selenideDriver, filePath) {
        const pageTitle = await selenideDriver.title();
        const dateTime = new Date().toLocaleString().replace(/ |:|-/g, '_');
        const fileName = `${pageTitle}_${dateTime}.png`;
        const completeFilePath = `${filePath}/${fileName}`;
        const screenshot = await selenideDriver.screenshot();
        fs.outputFileSync(completeFilePath, screenshot);
        return completeFilePath;
    }
    Utils.saveScreenshot = saveScreenshot;
    function toBy(cssOrXpathOrBy) {
        return (typeof cssOrXpathOrBy === 'string')
            ? cssOrXpathOrBy.includes('/') ? with_1.With.xpath(cssOrXpathOrBy) : with_1.With.css(cssOrXpathOrBy)
            : cssOrXpathOrBy;
    }
    Utils.toBy = toBy;
    function getDriver(entity) {
        /* tslint:disable:no-string-literal */
        const driver = entity['driver'];
        /* tslint:enable:no-string-literal */
        return driver;
    }
    Utils.getDriver = getDriver;
})(Utils = exports.Utils || (exports.Utils = {}));
//# sourceMappingURL=utils.js.map