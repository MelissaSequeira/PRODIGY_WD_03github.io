let temp = 0;
let gameEnded = false;
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var box4 = document.querySelector('.box4');
var box5 = document.querySelector('.box5');
var box6 = document.querySelector('.box6');
var box7 = document.querySelector('.box7');
var box8 = document.querySelector('.box8');
var box9 = document.querySelector('.box9');
var resbtn=document.querySelector('.Reset');

function addEventListeners() {
    box1.addEventListener('click', box1fun);
    box2.addEventListener('click', box2fun);
    box3.addEventListener('click', box3fun);
    box4.addEventListener('click', box4fun);
    box5.addEventListener('click', box5fun);
    box6.addEventListener('click', box6fun);
    box7.addEventListener('click', box7fun);
    box8.addEventListener('click', box8fun);
    box9.addEventListener('click', box9fun);
}

function removeEventListeners() {
    box1.removeEventListener('click', box1fun);
    box2.removeEventListener('click', box2fun);
    box3.removeEventListener('click', box3fun);
    box4.removeEventListener('click', box4fun);
    box5.removeEventListener('click', box5fun);
    box6.removeEventListener('click', box6fun);
    box7.removeEventListener('click', box7fun);
    box8.removeEventListener('click', box8fun);
    box9.removeEventListener('click', box9fun);
}


resbtn.addEventListener('click', resetfun);

function resetfun(){
    box1.innerHTML = box2.innerHTML = box3.innerHTML = box4.innerHTML = box5.innerHTML = box6.innerHTML = box7.innerHTML = box8.innerHTML = box9.innerHTML = '';
    box1.disabled = box2.disabled = box3.disabled = box4.disabled = box5.disabled = box6.disabled = box7.disabled = box8.disabled = box9.disabled = false;
    gameEnded = false;
    document.querySelector('.result').innerHTML = ''; // Clear result message
    addEventListeners(); // Re-add event listeners
}

addEventListeners();
    box1.addEventListener('click', box1fun);
    function box1fun(){
        if(this.innerHTML === '' ) {
            if(temp===0 && !gameEnded){
                this.innerHTML='X';
                this.disabled = true;
                temp=1;
                document.querySelector('.chance').innerHTML = "Player X Turn";
            } else {
                this.innerHTML='O';
                this.disabled = true;
                temp=0;
                document.querySelector('.chance').innerHTML = "Player O Turn";
            }
            checkWin();
        }
    }
    
    box2.addEventListener('click', box2fun);
    function box2fun(){
        if(this.innerHTML === '') {
            if(temp===0 && !gameEnded){
                this.innerHTML='X';
                this.disabled = true;
                temp=1;
                document.querySelector('.chance').innerHTML = "Player X Turn";
            } else {
                this.innerHTML='O';
                this.disabled = true;
                temp=0;
                document.querySelector('.chance').innerHTML = "Player O Turn";
            }
            checkWin();
        }
    }
    
    box3.addEventListener('click', box3fun);
    function box3fun(){
        if(this.innerHTML === '') {
            if(temp===0 && !gameEnded){
                this.innerHTML='X';
                this.disabled = true;
                temp=1;
                document.querySelector('.chance').innerHTML = "Player X Turn";
            } else {
                this.innerHTML='O';
                this.disabled = true;
                temp=0;
                document.querySelector('.chance').innerHTML = "Player O Turn";
            }
            checkWin();
        }
    }
    
    box4.addEventListener('click', box4fun);
    function box4fun(){
        if(this.innerHTML === '') {
            if(temp===0 && !gameEnded){
                this.innerHTML='X';
                this.disabled = true;
                temp=1;
                document.querySelector('.chance').innerHTML = "Player X Turn";
            } else {
                this.innerHTML='O';
                this.disabled = true;
                temp=0;
                document.querySelector('.chance').innerHTML = "Player O Turn";
            }
            checkWin();
        }
    }
    
    box5.addEventListener('click', box5fun);
    function box5fun(){
        if(this.innerHTML === '') {
            if(temp===0 && !gameEnded){
                this.innerHTML='X';
                this.disabled = true;
                temp=1;
                document.querySelector('.chance').innerHTML = "Player X Turn";
            } else {
                this.innerHTML='O';
                this.disabled = true;
                temp=0;
                document.querySelector('.chance').innerHTML = "Player O Turn";
            }
            checkWin();
        }
    }
    
    box6.addEventListener('click', box6fun);
    function box6fun(){
        if(this.innerHTML === '') {
            if(temp===0 && !gameEnded){
                this.innerHTML='X';
                this.disabled = true;
                temp=1;
                document.querySelector('.chance').innerHTML = "Player X Turn";
            } else {
                this.innerHTML='O';
                this.disabled = true;
                temp=0;
                document.querySelector('.chance').innerHTML = "Player O Turn";
            }
            checkWin();
        }
    }
    
    box7.addEventListener('click', box7fun);
    function box7fun(){
        if(this.innerHTML === '') {
            if(temp===0 && !gameEnded){
                this.innerHTML='X';
                this.disabled = true;
                temp=1;
                document.querySelector('.chance').innerHTML = "Player X Turn";
            } else {
                this.innerHTML='O';
                this.disabled = true;
                temp=0;
                document.querySelector('.chance').innerHTML = "Player O Turn";
            }
            checkWin();
        }
    }
    
    box8.addEventListener('click', box8fun);
    function box8fun(){
        if(this.innerHTML === '') {
            if(temp===0 && !gameEnded){
                this.innerHTML='X';
                this.disabled = true;
                temp=1;
                document.querySelector('.chance').innerHTML = "Player X Turn";
            } else {
                this.innerHTML='O';
                this.disabled = true;
                temp=0;
                document.querySelector('.chance').innerHTML = "Player O Turn";
            }
            checkWin();
        }
    }
    
    box9.addEventListener('click', box9fun);
    function box9fun(){
        if(this.innerHTML === '') {
            if(temp===0 && !gameEnded){
                this.innerHTML='X';
                this.disabled = true;
                temp=1;
                document.querySelector('.chance').innerHTML = "Player X Turn";
            } else {
                this.innerHTML='O';
                this.disabled = true;
                temp=0;
                document.querySelector('.chance').innerHTML = "Player O Turn";
            }
            checkWin();
        }
        
    }
    

function checkWin(){
    if(box1.innerHTML==='X' && box2.innerHTML==='X' && box3.innerHTML==='X'){
        document.querySelector('.result').innerHTML='X wins';
        gameEnded = true;
        endGame();
    } else if(box1.innerHTML==='O' && box2.innerHTML==='O' && box3.innerHTML==='O'){
        document.querySelector('.result').innerHTML='O wins';
        gameEnded = true;
        endGame();
    } else if(box1.innerHTML==='O' && box5.innerHTML==='O' && box9.innerHTML==='O'){
        document.querySelector('.result').innerHTML='O wins';
        gameEnded = true;
        endGame();
    } else if(box1.innerHTML==='X' && box5.innerHTML==='X' && box9.innerHTML==='X'){
        document.querySelector('.result').innerHTML='X wins';
        gameEnded = true;
        endGame();
    } else if(box1.innerHTML==='O' && box4.innerHTML==='O' && box7.innerHTML==='O'){
        document.querySelector('.result').innerHTML='O wins';
        gameEnded = true;
        endGame();
    } else if(box1.innerHTML==='X' && box4.innerHTML==='X' && box7.innerHTML==='X'){
        document.querySelector('.result').innerHTML='X wins';
        gameEnded = true;
        endGame();
    } else if(box2.innerHTML==='X' && box5.innerHTML==='X' && box8.innerHTML==='X'){
        document.querySelector('.result').innerHTML='X wins';
        gameEnded = true;
        endGame();
    } else if(box2.innerHTML==='O' && box5.innerHTML==='O' && box8.innerHTML==='O'){
        document.querySelector('.result').innerHTML='O wins';
        gameEnded = true;
        endGame();
    } else if(box3.innerHTML==='X' && box6.innerHTML==='X' && box9.innerHTML==='X'){
        document.querySelector('.result').innerHTML='X wins';
        gameEnded = true;
        endGame();
    } else if(box3.innerHTML==='O' && box6.innerHTML==='O' && box9.innerHTML==='O'){
        document.querySelector('.result').innerHTML='O wins';
        gameEnded = true;
        endGame();
    } else if(box4.innerHTML==='X' && box5.innerHTML==='X' && box6.innerHTML==='X'){
        document.querySelector('.result').innerHTML='X wins';
        gameEnded = true;
        endGame();
    } else if(box4.innerHTML==='O' && box5.innerHTML==='O' && box6.innerHTML==='O'){
        document.querySelector('.result').innerHTML='O wins';
        gameEnded = true;
        endGame();
    } else if(box7.innerHTML==='X' && box8.innerHTML==='X' && box9.innerHTML==='X'){
        document.querySelector('.result').innerHTML='X wins';
        gameEnded = true;
        endGame();
    } else if(box7.innerHTML==='O' && box8.innerHTML==='O' && box9.innerHTML==='O'){
        document.querySelector('.result').innerHTML='O wins';
        gameEnded = true;
        endGame();
    } else if(box3.innerHTML==='X' && box5.innerHTML==='X' && box7.innerHTML==='O'){
        document.querySelector('.result').innerHTML='X wins';
        gameEnded = true;
        endGame();
    } else if(box3.innerHTML==='O' && box5.innerHTML==='O' && box7.innerHTML==='O'){
        document.querySelector('.result').innerHTML='O wins';
        gameEnded = true;
        endGame();
    }
}

function endGame() {
    removeEventListeners(); // Remove event listeners
}
