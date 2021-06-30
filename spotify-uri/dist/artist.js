"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const spotify_uri_1 = __importDefault(require("./spotify-uri"));
class Artist extends spotify_uri_1.default {
    constructor(uri, id) {
        super(uri);
        this.type = 'artist';
        this.id = id;
    }
    static is(v) {
        return Boolean(v && v.type === 'artist');
    }
    toURI() {
        return `spotify:${this.type}:${util_1.encode(this.id)}`;
    }
    toURL() {
        return `/${this.type}/${util_1.encode(this.id)}`;
    }
}
exports.default = Artist;
//# sourceMappingURL=artist.js.map