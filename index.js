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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var web3_js_1 = require("@solana/web3.js");
var spl_token_1 = require("@solana/spl-token");
var promise_pool_1 = require("@supercharge/promise-pool");
// import axios from "axios";
// import { Metaplex } from "@metaplex-foundation/js";
var wallet = "4Jr36dU7y6XxWwFeANMRAhCJNm4ZqvWxTQEV4WmZLtif";
function processMintAddress() {
    return __awaiter(this, void 0, void 0, function () {
        var solana_connection, filters, tokenAccounts;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    solana_connection = new web3_js_1.Connection("https://special-responsive-dinghy.solana-mainnet.discover.quiknode.pro/5158345c25d3630b3f69ba4d4b524822351941b1/");
                    filters = [
                        {
                            //limiting the size to 165 - filtering
                            dataSize: 165
                        },
                        {
                            //memory comparison - in 165 bytes at byte 32 we start(wallets start at 32nd place)
                            memcmp: {
                                offset: 32,
                                bytes: wallet
                            }
                        },
                    ];
                    return [4 /*yield*/, solana_connection.getParsedProgramAccounts(spl_token_1.TOKEN_PROGRAM_ID, { filters: filters })];
                case 1:
                    tokenAccounts = _a.sent();
                    tokenAccounts.forEach(function (account) { return __awaiter(_this, void 0, void 0, function () {
                        var parsedAccountInfo, mintAddress, tokenBalance, toProcess, nftArray;
                        var _this = this;
                        var _a, _b, _c, _d, _e;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    parsedAccountInfo = account.account.data;
                                    mintAddress = (_b = (_a = parsedAccountInfo === null || parsedAccountInfo === void 0 ? void 0 : parsedAccountInfo.parsed) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.mint;
                                    tokenBalance = (_e = (_d = (_c = parsedAccountInfo === null || parsedAccountInfo === void 0 ? void 0 : parsedAccountInfo.parsed) === null || _c === void 0 ? void 0 : _c.info) === null || _d === void 0 ? void 0 : _d.tokenAmount) === null || _e === void 0 ? void 0 : _e.uiAmount;
                                    toProcess = [];
                                    toProcess.push(mintAddress);
                                    return [4 /*yield*/, new promise_pool_1.PromisePool()
                                            .withConcurrency(1)["for"](toProcess)
                                            .process(function (p) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                console.log("Getting Mint Address... ".concat(p));
                                                return [2 /*return*/];
                                            });
                                        }); })];
                                case 1:
                                    nftArray = _f.sent();
                                    // console.log(nftArray);
                                    process.exit();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
            }
        });
    });
}
processMintAddress();
