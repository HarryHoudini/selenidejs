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
class ByWebElementLocator {
    constructor(by, context) {
        this.by = by;
        this.context = context;
        this.by = by;
        this.context = context;
    }
    async find() {
        return this.context.findWebElement(this.by).catch(error => {
            throw new Error(`
            No elements found using ${this.toString()}
            Reason: ${error}
            `);
        });
    }
    toString() {
        return `${this.context.toString()}.find(${this.by})`;
    }
}
exports.ByWebElementLocator = ByWebElementLocator;
//# sourceMappingURL=byWebElementLocator.js.map