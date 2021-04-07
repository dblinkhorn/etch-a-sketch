// the script needs to accept a user input of an integer up to 100
// using this input, it will create a grid which is comprised of a number of divs on each side equal to the user input
// once created, the user can hover their mouse over the grid area and any div hovered over will change colors, or have other effects
// the page will also have a reset button to clear the grid and the user will be able redefine the size of the grid

let screen = document.getElementById("etch-screen");
let newDiv;
let i=0;
let divArray;

function addDivs (userNumber) {

    for (i=0; i < userNumber * userNumber; i++) {
        newDiv = document.createElement("div");
        document.getElementById("etch-screen").appendChild(newDiv);
        newDiv.id = `newDiv${i}`
        newDiv.className = `newDiv${i}`;
        width = Math.floor(600/userNumber);
        newDiv.style.width = `${width}px`;
        let hoverDiv = document.getElementById(`newDiv${i}`);
        hoverDiv.addEventListener("mouseover", function(){hoverDiv.style.backgroundColor = "#000"});
    }
}

addDivs(100);