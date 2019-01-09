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
/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */
const lib_1 = require("../../lib");
const testUtils_1 = require("../utils/testUtils");
const gherkin_1 = require("../utils/gherkin");
beforeAll(async () => {
    exports.browser = new lib_1.Browser(new lib_1.Configuration({
        driver: testUtils_1.TestUtils.buildWebDriver(),
        timeout: 500
    }));
    exports.GIVEN = new gherkin_1.Gherkin(exports.browser);
    exports.WHEN = exports.GIVEN;
    testUtils_1.TestUtils.startServer();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
});
afterAll(async () => {
    exports.browser.quit();
    testUtils_1.TestUtils.shutdownServer();
});
//# sourceMappingURL=base.js.map