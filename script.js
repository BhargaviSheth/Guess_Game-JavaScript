const words = [
    "JavaScript",
    "Python",
    "Dart",
    "Kotlin",
    "Go",
    "Swift",
    "R",
    "Perl",
    "SQL",
    "Ruby",
];

//random number from list 

let randomWord = Math.floor(Math.random() * words.length)
//console.log(randomWord)
let selectedWord= words[randomWord]
console.log(selectedWord)

let guessedlist = [];


let worddisplay =""
for(let i =0;i<selectedWord.length;i++){
    worddisplay = worddisplay.concat("_ ");

}
document.getElementById("worddisplay").textContent = worddisplay;
console.log(worddisplay)


//function to guess
function GuessLetter(){
    let inputElement = document.getElementById("user-input");
    //console.log(inputElement)

    if(!inputElement.value){
        alert("Please add Letter");
        return;
    }

    let letter = inputElement.value.toLowerCase()

    if (guessedlist.includes(letter)) { 
        alert("You have already guessed that letter!"); 
        return; 
    } 
  
    // Add the letter to the guessed letters array 
    guessedlist.push(letter); 
    console.log(guessedlist)
  

    let updatedDisplay = ""; 
    for (let i = 0; i < selectedWord.length; i++) { 
        if (guessedlist.includes(selectedWord[i])) { 
            updatedDisplay += selectedWord[i] + " "; 
            console.log(selectedWord[i])
            console.log(updatedDisplay)
        } else { 
            updatedDisplay += "_ "; 
        } 
    } 
    //console.log(updatedDisplay)
    document.getElementById("worddisplay").textContent = updatedDisplay; 

        

}
