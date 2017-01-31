"use strict";
var React = require("react");
var Board_1 = require("../Board");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (props) {
    var activeStyle = {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#a32121',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    };
    return React.createElement("div", { style: activeStyle },
        React.createElement(Board_1.default, null));
};
//# sourceMappingURL=index.js.map