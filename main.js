const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('') ;
const cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') ;

let caplength = Math.floor(cap.length*Math.random()) ;
let alphalenght = Math.floor(alphabet.length*Math.random()) ;
let re = Math.floor(alphabet.length*Math.random()) ;
let numlength = Math.floor(Math.random()*10) ;
let randomn = Math.floor(Math.random()*10) ;
(randomn==numlength)?numlength=numlength+=2:numlength=numlength ;

const data = document.getElementById('nan') ;
let definedcap =(alphabet[alphalenght]+randomn+cap[caplength]+alphabet[re]+numlength).toString() ;
data.innerHTML=definedcap ;


function listen(){
const CapchaVoice = new SpeechSynthesisUtterance(definedcap);
speechSynthesis.speak(CapchaVoice);
}


function btn(){
    const inputeddata = document.getElementById('input').value;
    (inputeddata==definedcap)?alert('Successfull'):
    (inputeddata==''||inputeddata==undefined)?alert('Please Enter the Capcha'):
    alert('Invalid Capcha Provided');
    reload() ;
}



function reload(){
    location.reload(definedcap);
}


let input = document.getElementById('input') ;

input.addEventListener('keypress',function(e) {
    if(e.key==='Enter'){
        btn() ;
    }
});







