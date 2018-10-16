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
class ByIndexedWebElementLocator {
    constructor(index, collection) {
        this.collection = collection;
        this.index = index;
    }
    async find() {
        const elements = await this.collection.getWebElements();
        if (elements.length <= this.index) {
            throw new elementNotFoundError_1.ElementNotFoundError(`Can't get '${this.index}' webelement from collection with length '${elements.length}'`);
        }
        return elements[this.index];
    }
    toString() {
        return `${this.collection.toString()}.get(${this.index})`;
    }
}
exports.ByIndexedWebElementLocator = ByIndexedWebElementLocator;
//# sourceMappingURL=byIndexedWebElementLocator.js.map