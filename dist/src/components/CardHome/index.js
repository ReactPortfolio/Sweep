"use strict";
var React = require("react");
var Card_1 = require("../Card");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (props) {
    var multiplier = 13;
    var cardHomeStyle = {
        position: 'relative',
        width: '68px',
        margin: '5px',
        marginTop: '0px',
        height: ((multiplier * (props.data.length - 1) + 99) + 'px'),
        border: '1px solid red'
    };
    var numberHomeStyle = {
        position: 'absolute',
        top: '-18px',
        right: '39%',
        width: '18px',
        height: '18px',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgb(169, 22, 22)',
        fontSize: '14px',
        borderRadius: '50%'
    };
    if (props.isAmmendable) {
        cardHomeStyle.boxShadow = 'rgb(8, 55, 228) 0px 0px 3px 2px';
    }
    var el = props.data.map(function (item, index) {
        var activeCardStyle = {
            position: 'absolute',
            top: index * multiplier + 'px',
            zIndex: index,
            left: 0
        };
        return React.createElement(Card_1.default, { number: item.number, visible: true, type: item.type, style: activeCardStyle, key: index });
    });
    console.log('el', el);
    return React.createElement("div", { style: cardHomeStyle },
        React.createElement("div", { style: numberHomeStyle }, props.number),
        el);
};
//# sourceMappingURL=index.js.map