"use strict";
var Menu1ScreenUi = /** @class */ (function () {
    function Menu1ScreenUi() {
        this.show = function () {
            var result = document.getElementById('selectedMenu');
            if (result) {
                result.innerHTML = "menu1";
            }
        };
        this.handleBtn1Click = function () {
            var result = document.getElementById('selectedMenu');
            if (result) {
                result.innerHTML = "menu1,btn1";
            }
        };
        this.handleBtn2Click = function () {
            var result = document.getElementById('selectedMenu');
            if (result) {
                result.innerHTML = "menu1,btn2";
            }
        };
    }
    return Menu1ScreenUi;
}());
var Menu2ScreenUi = /** @class */ (function () {
    function Menu2ScreenUi() {
        this.show = function () {
            var result = document.getElementById('selectedMenu');
            if (result) {
                result.innerHTML = "menu2";
            }
        };
        this.handleBtn1Click = function () {
            var result = document.getElementById('selectedMenu');
            if (result) {
                result.innerHTML = "menu2,btn1";
            }
        };
        this.handleBtn2Click = function () {
            var result = document.getElementById('selectedMenu');
            if (result) {
                result.innerHTML = "menu2,btn2";
            }
        };
    }
    return Menu2ScreenUi;
}());
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.currentMenu = null;
        this.clicked = function (el) {
            if (el === 'menu1') {
                _this.currentMenu = new Menu1ScreenUi();
                var result = _this.currentMenu.show();
            }
            else if (el === 'menu2') {
                _this.currentMenu = new Menu2ScreenUi();
                var result = _this.currentMenu.show();
            }
            else if (el === 'publicBtn1') {
                if (_this.currentMenu === null)
                    return;
                var result = _this.currentMenu.handleBtn1Click();
            }
            //사용자의 요구로 추가
            else if (el === 'publicBtn2') {
                if (_this.currentMenu === null)
                    return;
                var result = _this.currentMenu.handleBtn2Click();
            }
        };
    }
    return App;
}());
var app = new App();
var menu1 = document.getElementById('menuBtn1');
var menu2 = document.getElementById('menuBtn2');
var publicBtn1 = document.getElementById('publicBtn1');
// 사용자 요구로 추가
var publicBtn2 = document.getElementById('publicBtn2');
menu1.onclick = function () {
    app.clicked('menu1');
};
menu2.onclick = function () {
    app.clicked('menu2');
};
publicBtn1.onclick = function () {
    app.clicked('publicBtn1');
};
//사용자의 요구로 추가
publicBtn2.onclick = function () {
    app.clicked('publicBtn2');
};
var descripttion = "\n    \uAC1D\uCCB4\uC9C0\uD5A5\uC73C\uB85C \uBC14\uAFBC \uB4A4 \uAC01 \uD074\uB798\uC2A4\uC5D0 \uD574\uB2F9 \uBA54\uC11C\uB4DC\uB97C \uCD94\uAC00\uD558\uACE0<br>\n    App class\uC758 clicked\uBA54\uC11C\uB4DC\uC5D0 else if\uBB38 \uD558\uB098\uB9CC <br>\n    \uCD94\uAC00\uD574 \uC8FC\uBA74 \uAC04\uB2E8\uD558\uAC8C \uD574\uACB0 \uB41C\uB2E4.<br>\n    \uC720\uC9C0\uBCF4\uC218\uAC00 \uD3B8\uD558\uB2E4\n    ";
var viewDescription = document.getElementById('descriptionArea');
if (viewDescription) {
    viewDescription.innerHTML = descripttion;
}
