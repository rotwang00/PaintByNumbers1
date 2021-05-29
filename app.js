// let b1 = document.getElementById("butt1");
// let b2 = document.getElementById("butt2");
// let b3 = document.getElementById("butt3");
// let b4 = document.getElementById("butt4");
// let b5 = document.getElementById("butt5");

// b1.addEventListener("click", toggleState, false);
// b2.addEventListener("click", toggleState, false);
// b3.addEventListener("click", toggleState, false);
// b4.addEventListener("click", toggleState, false);
// b5.addEventListener("click", toggleState, false);

// addSquare();

function toggleState() {
    const id = this.id;
    console.log(`Toggled square ${id}`);
    this.classList.toggle("selected");
}

function addSquare() {
    const newSquare = document.createElement("button");
    const currentDiv = document.getElementById("puzzle");
    currentDiv.appendChild(newSquare);
}

function createGrid() {
    let size = 5;

    // Create grid div
    const newGrid = document.createElement("div");
    newGrid.setAttribute("id", "grid");

    for (let i = 0; i < size; i++) {
        // Create row div
        const newRow = document.createElement("div");
        newRow.setAttribute("id", `row${i}`);

        for (let j = 0; j < size; j++) {
            // Create square
            const newSquare = document.createElement("button");
            newSquare.setAttribute("id", `${i}${j}`);

            // Add event listener
            newSquare.addEventListener("click", toggleState, false);

            // Append square to row div
            newRow.appendChild(newSquare);
        }
        // Append row div to grid div
        newGrid.appendChild(newRow);
    }
    // Append grid div
    const puzzle = document.getElementById("puzzle");
    puzzle.appendChild(newGrid);
}

createGrid();