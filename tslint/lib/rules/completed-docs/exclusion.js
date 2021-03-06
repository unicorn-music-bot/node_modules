"use strict";
/**
 * @license
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exclusion = void 0;
var completedDocsRule_1 = require("../completedDocsRule");
var Exclusion = /** @class */ (function () {
    function Exclusion(descriptor) {
        if (descriptor === void 0) { descriptor = {}; }
        this.descriptor = descriptor;
    }
    Exclusion.prototype.createSet = function (values) {
        if (values === undefined || values.length === 0) {
            values = [completedDocsRule_1.ALL];
        }
        return new Set(values);
    };
    return Exclusion;
}());
exports.Exclusion = Exclusion;
