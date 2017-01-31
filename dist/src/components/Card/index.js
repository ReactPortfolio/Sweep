"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (props) {
    var defaultStyle = {
        width: '68px',
        height: '99px',
        backgroundColor: 'yellow',
        backgroundSize: 'contain'
    };
    var activeStyle = __assign({}, defaultStyle, props.style);
    if (props.visible) {
        var cardNumber = props.number + props.type;
        activeStyle.backgroundColor = 'transparent';
        activeStyle.backgroundImage = "url(/assets/images/" + cardNumber + ".svg)";
        activeStyle.backgroundRepeat = 'no-repeat';
    }
    return React.createElement("div", { style: activeStyle });
};
//# sourceMappingURL=index.js.map