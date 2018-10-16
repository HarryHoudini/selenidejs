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
const elementNotFoundError_1 = require("../errors/elementNotFoundError");
class ByWebElementLocator {
    constructor(by, context) {
        this.by = by;
        this.context = context;
    }
    async find() {
        const elements = await this.context.findElements(this.by);
        if (elements.length === 0) {
            throw new elementNotFoundError_1.ElementNotFoundError(`No elements found using ${this.toString()}`);
        }
        return elements[0];
    }
    toString() {
        return `${this.context.toString()}.find(${this.by})`;
    }
}
exports.ByWebElementLocator = ByWebElementLocator;
//# sourceMappingURL=byWebElementLocator.js.map