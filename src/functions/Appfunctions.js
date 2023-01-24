import { toast } from 'react-toastify';
import words from '../data/words';
import totalWords from '../data/totalWords';
import { Modal } from  'bootstrap';

  let CurBox=0;
  let CurRow=1; //MAX: 6
  let guessword="APPLE";//temp
  var colorMap = new Map();

  export function initGuessWord(){
    const randomNumber = Math.floor(Math.random() * words.length)
    guessword=words[randomNumber].toUpperCase();
    console.log(guessword)
  }

  export function buttonclicked(e) {
    if(CurBox<5 && CurRow<7){
      console.log("---->"+e.target.value);
      const allWithClass = Array.from(
        document.getElementsByClassName('line'+CurRow)
      );

      allWithClass[CurBox].innerHTML=e.target.value;
      CurBox++;
    }
  }

  export function buttonclickedByKey(key) {
    if(CurBox<5 && CurRow<7){
      console.log("---->"+key);
      const allWithClass = Array.from(
        document.getElementsByClassName('line'+CurRow)
      );

      allWithClass[CurBox].innerHTML=key;
      CurBox++;
    }
  }

  export function submitclicked(e){
    if(CurBox < 5){
      toast.warn('Not Enough Letters!', { position: "top-center", autoClose: 500, 
      hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined});
      return;
    }

    if(CurRow<7){
      const allWithClass = Array.from(
        document.getElementsByClassName('line'+CurRow)
      );
      const getGuessWord = ()=>{
        let word = ''
        
        for(let letter of allWithClass){
          word += letter.innerHTML
        }
        return word
      }

      const typeWord = getGuessWord();
      console.log(typeWord)

      if(typeWord === guessword){
        toast.success('🦄 Congrats! You Won', { position: "top-right", autoClose: 800, hideProgressBar: true, 
          closeOnClick: true, pauseOnHover: false,draggable: true, progress: undefined, theme: "light", });
        CurRow = 7; //END GAME
      }
      else if (!totalWords.includes(typeWord)){
        toast.error('Not in Wordlist!', { position: "top-center", autoClose: 500, hideProgressBar: true, 
          closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined});
        return;
      }
      

      let tempGuess=guessword;
      let temptype=typeWord;

      //change color for correct cube and key
      for(let i=0;i<5;i++){
        if(typeWord.charAt(i)===guessword.charAt(i)){
          allWithClass[i].style.backgroundColor = "var(--color-correct)";
          tempGuess = tempGuess.split('');
          tempGuess[i] = ' ';
          tempGuess = tempGuess.join('');
          temptype = temptype.split('');
          temptype[i] = ' ';
          temptype = temptype.join('');
          //console.log("m tempGuess",tempGuess);
          //console.log("m temptype:",temptype);
          changeKeyColor(typeWord.charAt(i), "--color-correct");
        }
        
      }

      //change color for present (existing letter but incorrect position) cube and key
      for(let i=0;i<5;i++){
        
        if(temptype.charAt(i)!==' ') {
          if(tempGuess.indexOf(typeWord.charAt(i))>-1){
            let indx=tempGuess.indexOf(typeWord.charAt(i));
            allWithClass[i].style.backgroundColor = "var(--color-present)";
            tempGuess = tempGuess.split('');
            tempGuess[indx] = ' ';
            tempGuess = tempGuess.join('');
            temptype = temptype.split('');
            temptype[i] = ' ';
            temptype = temptype.join('');
            changeKeyColor(typeWord.charAt(i), "--color-present");
          }else{
            
              temptype = temptype.split('');
              temptype[i] = '-';
              temptype = temptype.join('');
             
            
          }
          //console.log("tempGuess:",tempGuess);
          //console.log("temptype:",temptype);
        }
      }

      //change color for absent cube and key
      for(let i=0;i<5;i++){
        if(temptype.charAt(i)==='-'){
          changeKeyColor(typeWord.charAt(i), "--color-absent");
          allWithClass[i].style.backgroundColor = "var(--color-absent)";
        }
      }

      //next row
      CurBox=0;
      CurRow=CurRow+1;

      //check end game
      if(CurRow===7){
        toast.error('Game Over!', { position: "top-right", autoClose: 800, hideProgressBar: true, 
          closeOnClick: true, pauseOnHover: false,draggable: true, progress: undefined, theme: "light", });
      }
    }
  }

  export function delclicked(){
    if(CurBox> 0){
      
      const allWithClass = Array.from(
        document.getElementsByClassName('line'+CurRow)
      );
      allWithClass[CurBox-1].innerHTML="";
      CurBox--;
    }
  }

  export function handleKeyDown(key){
    console.log(key)
    key=''+key.toUpperCase();
    if(CurRow<7){
      console.log("--->"+key);
      if(key.match('ENTER')){
        submitclicked();
        return;
      }
      if(key.match('BACKSPACE')){
        delclicked();
        return;
      }
      if(key.match(/^[A-Z]$/)!=null){
        buttonclickedByKey(key);
        return;
      }
    }
  }

  export function changeKeyColor(key, color) {
    //console.log("Key, Color",key, ", "+ color);
    var r = document.querySelector(':root');
    var theme=document.documentElement.getAttribute("data-theme");
    if(theme==='dark'){
        r= document.querySelector('[data-theme=dark]');
    }
    
    var rs = getComputedStyle(r);
    const keyDiv=document.getElementById(key);

    if(colorMap.has(key)){
      if(color==='--color-correct'){
        colorMap.set(key,color);
        //console.log("map",colorMap);
        keyDiv.style.backgroundColor="var("+color+")";
      }
    }else{
      colorMap.set(key,color);
      //console.log("map",colorMap);
      keyDiv.style.backgroundColor="var("+color+")";
    }

  }