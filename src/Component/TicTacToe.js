import React, {useState} from "react";
import './styles/TicTacToe.css';


function TicTacToe() {
  

function reset(){
    var a = document.getElementById("1")
    a.innerHTML = " "

    a = document.getElementById("2")
          a.innerHTML = " "

    var a = document.getElementById("3")
      a.innerHTML = " "

      var a = document.getElementById("4")
    a.innerHTML = " "

    a = document.getElementById("5")
          a.innerHTML = " "

    var a = document.getElementById("6")
      a.innerHTML = " "

      var a = document.getElementById("7")
    a.innerHTML = " "

    a = document.getElementById("8")
          a.innerHTML = " "

    var a = document.getElementById("9")
      a.innerHTML = " "
}

var count = 0

function display(event){
    if(event.target.name === "button"){
        var a = document.getElementById("1")
          a.innerHTML = "X"
    }
    count++;
    if(count == 2){
        var a = document.getElementById("2")
          a.innerHTML = "O"
    }

    if(count ==  3) {
        var a = document.getElementById("3")
        a.innerHTML = "X"
    }

    if(count ==  4) {
        var a = document.getElementById("4")
        a.innerHTML = "O"
    }

    if(count ==  5) {
        var a = document.getElementById("5")
        a.innerHTML = "X"
    }

    if(count ==  6) {
        var a = document.getElementById("6")
        a.innerHTML = "O"
    }

    if(count ==  7) {
        var a = document.getElementById("7")
        a.innerHTML = "X"
    }

    if(count ==  8) {
        var a = document.getElementById("8")
        a.innerHTML = "O"
    }

    if(count ==  9) {
        var a = document.getElementById("9")
        a.innerHTML = "X"

    }

    if(count > 9){
        count = 0
        reset()
    }
    
}

    
    return(

        <div className = "mainContainer">
            <div className = "dashboard" id="1"> </div>
            <div className = "dashboard" id="2"> </div>
            <div className = "dashboard" id="3"> </div>
            <div className = "dashboard" id="4"> </div>
            <div className = "dashboard" id="5"> </div>
            <div className = "dashboard" id="6"> </div>
            <div className = "dashboard" id="7"> </div>
            <div className = "dashboard" id="8"> </div>
            <div className = "dashboard" id="9"> </div>
            <button name="button" onClick={display}>Player1</button>
        </div>
        
    )
}

export default TicTacToe