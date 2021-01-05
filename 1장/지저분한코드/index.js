window.onload = () => {
    const menu1 = document.getElementById('menuBtn1');
    const menu2 = document.getElementById('menuBtn2');
    const publicBtn1 = document.getElementById('publicBtn1');
    // 사용자 요구로 추가
    const publicBtn2 = document.getElementById('publicBtn2');

    let currentMenu = null;
    const changeUiToMenu1 = () => {
        document.getElementById('selectedMenu').innerHTML= "menu1";
        currentMenu= "menu1"
    }

    const changeUiToMenu2 = () => {
        document.getElementById('selectedMenu').innerHTML= "menu2";
        currentMenu= "menu2"
    }

    const processBtn1WhenMenu1 = () => {
        document.getElementById('selectedMenu').innerHTML= "menu1,btn1";
    }

    const processBtn1WhenMenu2 = () => {
        document.getElementById('selectedMenu').innerHTML= "menu2,btn1";
    }
    //사용자 요구로 추가
    const processBtn2WhenMenu1 = () => {
        document.getElementById('selectedMenu').innerHTML= "menu1,btn2";
    }

    const processBtn2WhenMenu2 = () => {
        document.getElementById('selectedMenu').innerHTML= "menu2,btn2";
    }

    const BtnClicked = (el) => {
        if(el === 'menuBtn1'){
            changeUiToMenu1();
        }
        else if (el === 'menuBtn2'){
            changeUiToMenu2();
        }
        else if (el === 'publicBtn1'){
            if(currentMenu === null) return;
            if(currentMenu === 'menu1'){
                processBtn1WhenMenu1()
            }else if (currentMenu === 'menu2'){
                processBtn1WhenMenu2()
            }
        }
        // 추가되는 부분
        else if (el === 'publicBtn2'){
            if(currentMenu === null) return;
            if(currentMenu === 'menu1'){
                processBtn2WhenMenu1()
            }else if (currentMenu === 'menu2'){
                processBtn2WhenMenu2()
            }
        }
    }
    
    const descripttion=
    `
    공통 영역의 btn2가 추가 된다고 가정하면<br>
     BtnClicked의 else if와 그 안의<br>
    if문이 통째로 추가 되는 문제 발생<br>
    간단한 수정사항에도 많은 코드의 추가와 
    이와 같은 문제를 방치하면 후에 유지 보수 측면에서 
    문제가 발생할 확률이 매우 높다.<br>
    `
    
    menu1.onclick = () => {
        BtnClicked('menuBtn1');
    }
    menu2.onclick = () => {
        BtnClicked('menuBtn2');
    }
    publicBtn1.onclick = () => {
        BtnClicked('publicBtn1');
    }
    //사용자의 요구로 추가
    publicBtn2.onclick = () => {
        BtnClicked('publicBtn2');
    }

    document.getElementById('descriptionArea').innerHTML = descripttion;

}