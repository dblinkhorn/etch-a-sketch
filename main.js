// the script needs to accept a user input of an integer up to 100
// using this input, it will create a grid which is comprised of a number of divs on each side equal to the user input
// once created, the user can hover their mouse over the grid area and any div hovered over will change colors, or have other effects
// the page will also have a reset button to clear the grid and the user will be able redefine the size of the grid

// variable to store screen element
let screen = document.getElementById("etch-screen");

// creates a number of div elements inside screen element based on the user's input
// also adds event listener to detect mouse hover on each div
function addDivs (userNumber) {
    // iterates through each number in the range of the user input number
    for (i=0; i < userNumber * userNumber; i++) {
        // variable to store DOM create element
        let newDiv = document.createElement("div");
        // each time through the loop, add the newly created div to the screen element
        document.getElementById("etch-screen").appendChild(newDiv);
        // sets id of each new div to include the value of i for each loop
        newDiv.id = `newDiv${i}`;
        // does the same thing as above but for class
        newDiv.className = `newDiv${i}`;
        // set width variable to be a floor division of user number by the fixed screen size
        width = Math.floor(600/userNumber);
        // set the width of each newly created div to be an equal division of the screen size
        newDiv.style.width = `${width}px`;
        // variable to store each newly created div
        let hoverDiv = document.getElementById(`newDiv${i}`);
        // adds an event listener to each newly created div to detect a mouse hover and change that div's backgroud to black
        hoverDiv.addEventListener("mouseover", function(){hoverDiv.style.backgroundColor = "#000"});
    }
}

// gets user input from text form and set resolution of screen
function gridSizeInput() {

    // variable to store the user input value
    let input = document.getElementById('grid-size').value;

    // checks to make sure input is a number between 1 and 100
    if(!isNaN(parseInt(input)) && (input > 0) && (input <= 100)) {
        // if it is, clear the screen
        document.getElementById("etch-screen").innerHTML = "";
        // and run addDivs with the valid input
        addDivs(input);
    // otherwise tell the user it's invalid
    } else {
        alert("You must enter an integer from 1 to 100.");
    }
}

// clears the screen and tells user to enter a new resolution
function clearScreen() {
    document.getElementById("etch-screen").innerHTML = "";
    alert("Screen cleared. Please enter a new resolution.");
}