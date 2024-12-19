//generam un numar aleatoriu
let randomNumber= Math.floor(Math.random()*100)+1;

// save the reference in the place
const guesses= document.querySelector(".guesses");
const lastResult= document.querySelector(".lastResult");
const lowerORhigher= document.querySelector(".lowerORhigher");

// salvam referinta de elemente de intrare cu 
// clase specificate
const guessSubmit= document.querySelector(".guessSubmit");
const guessField= document.querySelector(".guessField");

//salvam numarul de incercari si o variabila de generat 
//un buton de resetare
let guessCount=1;
let resetButton; //pentru a crea referinta al un buton

//Functii
//sunt blocuri de cod reutilizabile pe care le scriem 
//o singura data si le putem folosi de mai multe ori
function checkGuess(){
    //conditii
    //sunt instructiuni care verifica o comparatie si
    //realizeaza o actiune

let userGuess= Number(guessField.value);
if(userGuess===randomNumber){
    lastResult.textContent="Felicitari! Ai reusit!";
    lastResult.style.backgroundColor="pink";
    lowerORhigher.textContent="";
    setGameOver();
}
else if(guessCount===10){
        lastResult.textContent="Joc terminat:(";
        setGameOver();
    }
    else{
        lastResult.textContent="Incorect";
        lastResult.style.backgroundColor="red";
        if(userGuess < randomNumber){
            lowerORhigher.textContent="Numarul ales este prea mic";
        }
        else if(userGuess > randomNumber){
                lowerORhigher.textContent="Numarul ales este prea mare";
                }
        }
guessCount++;
guessField.value="";
guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);
function setGameOver(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton= document.createElement("button");
    resetButton.textContent="INCEPE UN JOC NOU";
    resetButton.style.backgroundColor="#e64ad9";
    resetButton.style.color="white";
    resetButton.style.padding="10px";
    resetButton.style.border="1px, solid, pink";
    resetButton.style.borderRadius="5px";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}
function resetGame(){
    guessCount=1;
    const resetParas= document.querySelectorAll("result.Paras p");
    for(let i=0; i < resetParas.length; i++){
        resetParas[i].textContent="";
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessField.value="";
    guessField.focus();

    lastResult.style.backgroundColor= "#a0d0f8";
    randomNumber= Math.floor(Math.random()*100)+1;
}