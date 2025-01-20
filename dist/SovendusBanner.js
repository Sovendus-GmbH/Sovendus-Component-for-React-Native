"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SovendusBanner = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var SovendusAppBanner_1 = require("./SovendusAppBanner");
var SovendusBanner = function (props) {
    if (react_native_1.Platform.OS === "web") {
        throw new Error("SovendusBanner is not supported on web yet");
    }
    else {
        return react_1.default.createElement(SovendusAppBanner_1.SovendusAppBanner, __assign({}, props));
    }
};
exports.SovendusBanner = SovendusBanner;
