interface ScreenUi {
    show: void;
    handleBtn1Click: void;
}
declare class Menu1ScreenUi implements ScreenUi {
    show: any;
    handleBtn1Click: any;
    handleBtn2Click: any;
}
declare class Menu2ScreenUi implements ScreenUi {
    show: any;
    handleBtn1Click: any;
    handleBtn2Click: any;
}
declare class App {
    currentMenu: any;
    clicked: any;
}
declare const app: any;
declare const menu1: any;
declare const menu2: any;
declare const publicBtn1: any;
declare const publicBtn2: any;
declare const descripttion = "\n    \uAC1D\uCCB4\uC9C0\uD5A5\uC73C\uB85C \uBC14\uAFBC \uB4A4 \uAC01 \uD074\uB798\uC2A4\uC5D0 \uD574\uB2F9 \uBA54\uC11C\uB4DC\uB97C \uCD94\uAC00\uD558\uACE0<br>\n    App class\uC758 clicked\uBA54\uC11C\uB4DC\uC5D0 else if\uBB38 \uD558\uB098\uB9CC <br>\n    \uCD94\uAC00\uD574 \uC8FC\uBA74 \uAC04\uB2E8\uD558\uAC8C \uD574\uACB0 \uB41C\uB2E4.<br>\n    \uC720\uC9C0\uBCF4\uC218\uAC00 \uD3B8\uD558\uB2E4\n    ";
declare const viewDescription: HTMLElement | null;
