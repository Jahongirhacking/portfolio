var turnOn=true;
function bulb(){
    if(turnOn) {
        document.getElementById('real__bulb').className='fas fa-lightbulb turn__off';
        document.getElementById('aboutMe').className='soyaFalse';
        document.getElementById('aboutHeading').className='soyaFalse';
    }else{
        document.getElementById('real__bulb').className='fas fa-lightbulb turn__on';
        document.getElementById('aboutMe').className='soyaTrue';
        document.getElementById('aboutHeading').className='soyaTrue';
    }
    

    turnOn=!turnOn;
}


var bor=false;
function parda(){
    if(bor) {
        document.getElementById('parda').className='parda__yoq';
    }else{
        document.getElementById('parda').className='parda__bor';
    }
    

    bor=!bor;
}

/*

duration: ketadigan vaqt;
opacity:        paydo bulish
stagger:        1-class bilan 2-class vaqt oralig'i
delay:          1-animatsiya bilan 2-animatsiya oralig'i
repeat          necha marta qaytarish
repeat: -1      cheksiz animatsiya    
yoyo: true      element borish va qaytish

*/

gsap.registerPlugin(MotionPathPlugin);

gsap.to('.n1',{ duration: 15, stagger:1, repeat:-1, yoyo:true, motionPath: "#path1"})
gsap.to('.n2',{ duration: 16, stagger:1, repeat:-1, yoyo:true, motionPath: "#path2"})
gsap.to('.n3',{ duration: 20, stagger:1, repeat:-1, yoyo:true, motionPath: "#path3"})
