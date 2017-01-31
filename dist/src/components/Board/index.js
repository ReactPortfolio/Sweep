"use strict";
var React = require("react");
var Card_1 = require("../Card");
var CardHome_1 = require("../CardHome");
var cardHomeData = [
    {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    }, {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    },
    {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    }, {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (props) {
    var activeStyle = {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'green',
        width: '50%',
        height: '300px',
        padding: '20px',
        borderRadius: '10px'
    };
    return React.createElement("div", { style: activeStyle },
        React.createElement(Card_1.default, { visible: true, number: 2, type: 'clubs' }),
        React.createElement(CardHome_1.default, { isAmmendable: true, number: 13, data: cardHomeData }));
};
//# sourceMappingURL=index.js.map