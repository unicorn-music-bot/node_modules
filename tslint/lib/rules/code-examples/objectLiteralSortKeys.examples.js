"use strict";
/**
 * @license
 * Copyright 2018 Palantir Technologies, Inc.
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
exports.codeExamples = void 0;
var tslib_1 = require("tslib");
var Lint = require("../../index");
// tslint:disable: object-literal-sort-keys
exports.codeExamples = [
    {
        description: "Requires that an object literal's keys be sorted alphabetically.",
        config: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n            \"rules\": { \"object-literal-sort-keys\": true }\n        "], ["\n            \"rules\": { \"object-literal-sort-keys\": true }\n        "]))),
        pass: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n            let o = {\n                bar: 2,\n                foo: 1\n            };\n        "], ["\n            let o = {\n                bar: 2,\n                foo: 1\n            };\n        "]))),
        fail: Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n            let o = {\n                foo: 1,\n                bar: 2\n            };\n        "], ["\n            let o = {\n                foo: 1,\n                bar: 2\n            };\n        "]))),
    },
    {
        description: Lint.Utils
            .dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["Requires that an object literal's keys be sorted by interface-definition.\n            If there is no interface fallback to alphabetically."], ["Requires that an object literal's keys be sorted by interface-definition.\n            If there is no interface fallback to alphabetically."]))),
        config: Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n            \"rules\": {\n                \"object-literal-sort-keys\": {\n                    \"options\": \"match-declaration-order\"\n                }\n            }\n        "], ["\n            \"rules\": {\n                \"object-literal-sort-keys\": {\n                    \"options\": \"match-declaration-order\"\n                }\n            }\n        "]))),
        pass: Lint.Utils.dedent(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n            interface I {\n                foo: number;\n                bar: number;\n            }\n\n            let o: I = {\n                foo: 1,\n                bar: 2\n            };\n        "], ["\n            interface I {\n                foo: number;\n                bar: number;\n            }\n\n            let o: I = {\n                foo: 1,\n                bar: 2\n            };\n        "]))),
        fail: Lint.Utils.dedent(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n            interface I {\n                foo: number;\n                bar: number;\n            }\n\n            let o: I = {\n                bar: 2,\n                foo: 1\n            };\n        "], ["\n            interface I {\n                foo: number;\n                bar: number;\n            }\n\n            let o: I = {\n                bar: 2,\n                foo: 1\n            };\n        "]))),
    },
];
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
