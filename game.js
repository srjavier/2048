/*
Add your code for Game here
 */
export default class Game {
    constructor(width){
        this.width = width;
        this.board = genBoard(width);
        this.score = 0;
        this.won = false;
        this.over = false;
        this.moveFunc = [];
        this.loseFunc =[];
        this.winFunc = [];
    }

    setupNewGame() {
        this.board = genBoard(this.width);
        this.score = 0;
        this.won = false;
        this.over = false;
        this.moveFunc = [];
        this.loseFunc =[];
        this.winFunc = [];
    }

    loadGame(gameState) {
        this.board = gameState.board;
        this.score = gameState.score;
        this.won = gameState.won;
        this.over = gameState.over;
    }

    move(direction) {
        this.moveFunc.forEach( x=>{
            x(this.gameState)
        });
        if (direction == "up"){
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board.length; j++) {
                    if ((i % this.width == j % this.width) && (j-i == this.width)){
                        if( this.board[i] == 0 && (this.board[j] != 0 ) ){
                            this.board[i] = this.board[j];
                            this.board[j] = 0;
                        }
                    }
                }
            }
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board.length; j++) {
                    if ((i % this.width == j % this.width) && (j-i == this.width)){
                        if( this.board[i] == 0 && (this.board[j] != 0 ) ){
                            this.board[i] = this.board[j];
                            this.board[j] = 0;
                        }
                    }
                }
            }
            
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board.length; j++) {
                    
                    if ((i % this.width == j % this.width) && (j-i == this.width)) {
                                if (this.board[i] == this.board[j]){
                                    let temp = this.board[i];
                                    this.board[i] = temp + this.board[j];
                                    this.board[j] = 0;
                                    this.score = this.score+ this.board[i];
                                }
                    }
                        
                }
            }
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board.length; j++) {
                    if ((i % this.width == j % this.width) && (j-i == this.width)){
                        if( this.board[i] == 0 && (this.board[j] != 0 ) ){
                            this.board[i] = this.board[j];
                            this.board[j] = 0;
                        }
                    }
                }
            }
        }
        
        

        if (direction == "down"){
            for (let i = this.board.length-1; i >0; i--) {
                for (let j = this.board.length-1; j >= 0; j--) {
                    if ((i % this.width == j % this.width) && (i-j == this.width)){
                        if( this.board[i] == 0 && (this.board[j] != 0 ) ){
                            this.board[i] = this.board[j];
                            this.board[j] = 0;
                        }
                    }
                }
            }
            for (let i = this.board.length-1; i >0; i--) {
                for (let j = this.board.length-1; j >= 0; j--) {
                    if ((i % this.width == j % this.width) && (i-j == this.width)){
                        if( this.board[i] == 0 && (this.board[j] != 0 ) ){
                            this.board[i] = this.board[j];
                            this.board[j] = 0;
                        }
                    }
                }
            }
        
        for (let i = this.board.length-1; i >0; i--) {
            for (let j = this.board.length-1; j >= 0; j--) {
                if ((i % this.width == j % this.width) && (i-j == this.width)){
                        if (this.board[i] == this.board[j]){
                            let temp = this.board[i];
                            this.board[i] = temp + this.board[j];
                            this.board[j] = 0;
                            this.score = this.score+ this.board[i];
                        }
                    }
                }
            }
            for (let i = this.board.length; i >0; i--) {
                for (let j = this.board.length; j >= 0; j--) {
                    if ((i % this.width == j % this.width) && (i-j == this.width)) {
                        if( this.board[i] == 0 && (this.board[j] != 0 ) ){
                            this.board[i] = this.board[j];
                            this.board[j] = 0;
                    }
                }
            }
        }
    }
        if (direction == "left"){
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board.length; j++) {
                    if ((i % this.width == 0) && (j == i+1)) {
                        // for ( let k =0; k<this.width; k++){
                            if (this.board[i] == 0 && this.board[j] != 0 ){
                                this.board[i] = this.board[j];
                                this.board[j] = 0;
                            }
                            if (this.board[j] == 0 && this.board[j+1] != 0 ){
                                this.board[j] = this.board[j+1];
                                this.board[j+1] = 0;
                            }
                            if (this.board[j+1] == 0 && this.board[j+2] != 0 ){
                                this.board[j+1] = this.board[j+2];
                                this.board[j+2] = 0;
                            }
                        // }
                    }
                }
            }

            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board.length; j++) {
                    if ((i % this.width == 0) && (j == i+1)) {
                        if (this.board[i] == 0 && this.board[j] != 0 ){
                            this.board[i] = this.board[j];
                            this.board[j] = 0;
                        }
                        if (this.board[j] == 0 && this.board[j+1] != 0 ){
                            this.board[j] = this.board[j+1];
                            this.board[j+1] = 0;
                        }
                        if (this.board[j+1] == 0 && this.board[j+2] != 0 ){
                            this.board[j+1] = this.board[j+2];
                            this.board[j+2] = 0;
                        }
                    }
                }
            }

            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board.length; j++) {
                    if ((i % this.width+1 == (j % this.width)) && (j-i == 1)) {
                            if (this.board[i] == this.board[j]){
                                let temp = this.board[i];
                                this.board[i] = temp + this.board[j];
                                this.board[j] = 0;
                                this.score = this.score+ this.board[i];
                            }
                        } 
                    }
                }
            
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board.length; j++) {
                    if ((i % this.width == 0) && (j == i+1)) {
                        if (this.board[i] == 0 && this.board[j] != 0 ){
                            this.board[i] = this.board[j];
                            this.board[j] = 0;
                        }
                        if (this.board[j] == 0 && this.board[j+1] != 0 ){
                            this.board[j] = this.board[j+1];
                            this.board[j+1] = 0;
                        }
                        if (this.board[j+1] == 0 && this.board[j+2] != 0 ){
                            this.board[j+1] = this.board[j+2];
                            this.board[j+2] = 0;
                        }
                    }
                }
            }
        }
    
        if (direction == "right"){
            for (let i = this.board.length-1; i >0; i--) {
                for (let j = this.board.length-1; j >= 0; j--) {
                    if ((i % this.width == this.width-1) && (j == i-1)) {
                        if (this.board[i] == 0 && this.board[j] != 0 ){
                            this.board[i] = this.board[j];
                            this.board[j] = 0;
                        }
                        if (this.board[j] == 0 && this.board[j-1] != 0 ){
                            this.board[j] = this.board[j-1];
                            this.board[j-1] = 0;
                        }
                        if (this.board[j-1] == 0 && this.board[j-2] != 0 ){
                            this.board[j-1] = this.board[j-2];
                            this.board[j-2] = 0;
                        }
                    }
                }
            }

            for (let i = this.board.length-1; i >0; i--) {
                for (let j = this.board.length-1; j >= 0; j--) {
                    if ((i % this.width == this.width-1) && (j == i-1)) {
                        if (this.board[i] == 0 && this.board[j] != 0 ){
                            this.board[i] = this.board[j];
                            this.board[j] = 0;
                        }
                        if (this.board[j] == 0 && this.board[j-1] != 0 ){
                            this.board[j] = this.board[j-1];
                            this.board[j-1] = 0;
                        }
                        if (this.board[j-1] == 0 && this.board[j-2] != 0 ){
                            this.board[j-1] = this.board[j-2];
                            this.board[j-2] = 0;
                        }
                    }
                }
            }

            // for (let i = 0; i < this.board.length; i++) {
            //     for (let j = 0; j < this.board.length; j++) {
            //         if ((i % this.width+1 == (j % this.width)) && (j-i == 1)) {
            //                 if (this.board[i] == this.board[j]){
            //                     let temp = this.board[i];
            //                     this.board[i] = temp + this.board[j];
            //                     this.board[j] = 0;
            //                 }
            //             } 
            //         }
            //     }

            for (let i = this.board.length-1; i >=0; i--) {
                for (let j = this.board.length-1; j >= 0; j--) {
                    if (((i % this.width) == (j % this.width)-1 && (j-i == 1))) {
                            if (this.board[i] == this.board[j]){
                                let temp = this.board[j];
                                this.board[j] = temp + this.board[i];
                                this.board[i] = 0;
                                this.score = this.score+ this.board[j];
                            }
                    
                    }
                }
            }
            for (let i = this.board.length-1; i >0; i--) {
                for (let j = this.board.length-1; j >= 0; j--) {
                    if ((i % this.width == this.width-1) && (j == i-1)) {
                        if (this.board[i] == 0 && this.board[j] != 0 ){
                            this.board[i] = this.board[j];
                            this.board[j] = 0;
                        }
                        if (this.board[j] == 0 && this.board[j-1] != 0 ){
                            this.board[j] = this.board[j-1];
                            this.board[j-1] = 0;
                        }
                        if (this.board[j-1] == 0 && this.board[j-2] != 0 ){
                            this.board[j-1] = this.board[j-2];
                            this.board[j-2] = 0;
                        }
                    }
                }
            }
        }
        if (isFull(this.board) == false){
            let index;
            do{
                index = getRandomInt(this.board.length);
            } while (this.board[index] != 0);
        
            let value = Math.random() < 0.9 ? 2 : 4;
            this.board[index] = value;
        }

        let woo = false;
        for (let i = 0; i < this.board.length; i++) {
            if(this.board[i] == 2048){
                woo = true;
            }
        }

        if(woo == true){
            this.won = true;
            this.winFunc.forEach( x => {
                x(this.getGameState())
            });
        }

        

        
        
        if (isFull(this.board) == true){
            let boo = true;
            let doo = false;
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board.length; j++) {
                    if ((i % this.width == 0) && (j == i+1) ) {
                        if ((this.board[i] == this.board[j]) 
                        | (this.board[j] == this.board[j+1]) 
                        | (this.board[j+1] == this.board[j+2])){
                            boo = false;
                        }
                    } 
                    // (i % this.width == j % this.width) && (j-i == this.width)
                }
            }
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board.length; j++) {
                    
                    if ((i % this.width == j % this.width) && (j-i == this.width)) {
                                if (this.board[i] == this.board[j]){
                                    boo = false;
                                }
                    }
                }
            }


            if(boo == true){
                if(this.won == false){
                    this.loseFunc.forEach( x => {
                        x(this.getGameState())
                    });
                    
                }
                this.over = true;
            }           
        }
    }
    
    toString(){
        let string = "";
        for (let i = 0; i < this.board.length; i++){
            if(i % this.width == 0){
                string += ("\n");
            }
            string += this.board[i] + ", "
        }
        return string;
    }

    onMove(callback){
        this.moveFunc.push(callback);
    }

    onWin(callback){
        this.winFunc.push(callback);
    }

    onLose(callback){
        this.loseFunc.push(callback);
    }


    getGameState(){
        let gameState = {};
        gameState.board = this.board;
        gameState.score = this.score;
        gameState.won = this.won;
        gameState.over = this.over;
        return gameState;
    }

}

function isFull(board){
    let val = 0;
    for (let i =0; i<board.length; i++){
        if(board[i] == 0){
            val++;
        }
    }
    if (val != 0){
        return false;
    } else {
        return true;
    }
}

function genBoard(width){
    let board = new Array(width * width);
    for (let i = 0; i < board.length; i++){
        board[i] = 0;
    }
    let index;
    let index2;
    do{
        index = getRandomInt(board.length);
        index2 = getRandomInt(board.length);
    } while (index == index2);
    
    let value = Math.random() < 0.9 ? 2 : 4;
    board[index] = value;
    
    let value2 = Math.random() < 0.9 ? 2 : 4;
    board[index2] = value2;
    return board;
}

function randomTile(board){
    let index;
    do{
        index = getRandomInt(board.length);
    } while (board[index] == 0);
    
        let value = Math.random() < 0.9 ? 2 : 4;
        board[index] = value;
    return board;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

