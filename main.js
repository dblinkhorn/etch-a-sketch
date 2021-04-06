// the script needs to accept a user input of an integer up to 100
// using this input, it will create a grid which is comprised of a number of divs on each side equal to the user input
// once created, the user can hover their mouse over the grid area and any div hovered over will change colors, or have other effects
// the page will also have a reset button to clear the grid and the user will be able redefine the size of the grid

let screen = document.getElementById("etch-screen");

function addDivs (userNumber) {
    for (i=0; i < userNumber * userNumber; i++) {
        let newDiv = document.createElement("div");
        document.getElementById("etch-screen").appendChild(newDiv);
        newDiv.id = `div${i}`;
        newDiv.className = 'newDiv';
    }

    console.log("addDivs called")
    console.log(userNumber)
}

addDivs(50);