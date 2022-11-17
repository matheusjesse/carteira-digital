"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../database/models/users"));
const JwtService_1 = __importDefault(require("../middlewares/JwtService"));
class LoginService {
    constructor() {
        this.login = (username, password) => __awaiter(this, void 0, void 0, function* () {
            yield users_1.default.findOne({
                where: { username },
                attributes: { exclude: ['password'] },
            });
            const token = JwtService_1.default.sign({ username, password });
            return token;
        });
        this.findUser = (username) => __awaiter(this, void 0, void 0, function* () {
            const user = yield users_1.default.findOne({
                where: { username },
            });
            return user;
        });
    }
}
exports.default = LoginService;
