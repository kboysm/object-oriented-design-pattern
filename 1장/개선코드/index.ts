interface ScreenUi {
        show:void;
        handleBtn1Click:void;
}

class Menu1ScreenUi implements ScreenUi {
    show:any = ():void => {
        const result:any = document.getElementById('selectedMenu');
        if(result) {
            result.innerHTML = "menu1";
        }
        
    }
    handleBtn1Click:any = ():void => {
        const result:any = document.getElementById('selectedMenu');
        if(result) {
            result.innerHTML = "menu1,btn1";
        }
    }

    handleBtn2Click:any = ():void => {
        const result:any = document.getElementById('selectedMenu');
        if(result) {
            result.innerHTML = "menu1,btn2";
        }
    }
}

class Menu2ScreenUi implements ScreenUi {
    show:any = ():void => {
        const result:any = document.getElementById('selectedMenu');
        if(result) {
            result.innerHTML = "menu2";
        }
    }
    handleBtn1Click:any = ():void => {
        const result:any = document.getElementById('selectedMenu');
        if(result) {
            result.innerHTML = "menu2,btn1";
        }
    }

    handleBtn2Click:any = ():void => {
        const result:any = document.getElementById('selectedMenu');
         if(result) {
            result.innerHTML = "menu2,btn2";
        }
    }
}

class App {

    currentMenu:any = null;

    clicked:any = (el:string)=> {
        if(el === 'menu1') {
            this.currentMenu = new Menu1ScreenUi();
            const result:null = this.currentMenu.show()
        }
        else if (el === 'menu2') {
            this.currentMenu = new Menu2ScreenUi();
            const result:null = this.currentMenu.show()
        }
        else if ( el === 'publicBtn1') {
            if (this.currentMenu === null) return;
            const result:null = this.currentMenu.handleBtn1Click();
        }
        //사용자의 요구로 추가
        else if ( el === 'publicBtn2') {
            if (this.currentMenu === null) return;
            const result:null = this.currentMenu.handleBtn2Click();
        }
    }
}

const app:any = new App();
const menu1:any = document.getElementById('menuBtn1');
const menu2:any = document.getElementById('menuBtn2');
const publicBtn1:any = document.getElementById('publicBtn1');
    // 사용자 요구로 추가
const publicBtn2:any = document.getElementById('publicBtn2');

menu1.onclick = ():void => {
    app.clicked('menu1');
}
menu2.onclick = ():void => {
    app.clicked('menu2');
}
publicBtn1.onclick = ():void => {
    app.clicked('publicBtn1');
}
//사용자의 요구로 추가
publicBtn2.onclick = ():void => {
    app.clicked('publicBtn2');
}

const descripttion=
    `
    객체지향으로 바꾼 뒤 각 클래스에 해당 메서드를 추가하고<br>
    App class의 clicked메서드에 else if문 하나만 <br>
    추가해 주면 간단하게 해결 된다.<br>
    유지보수가 편하다
    `
    
const viewDescription = document.getElementById('descriptionArea');
if(viewDescription) {
    viewDescription.innerHTML = descripttion;
}