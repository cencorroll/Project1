/* eslint-disable no-unused-vars */
function init() {

  // ! Function to create a grid
  // ? Element
  const grid = document.querySelector('#grid')
  // const startButton = document.querySelector('#start')
  // const buttons = document.querySelector('#grid')

  // ? Grid Creation
  // We are creating a 7x6 grid. The variables are
  const width = 7
  const cellCount = width * 6
  const cells = []
  // const startButton = document.querySelector('#button')
  // console.log('BUTTON')
  


  // ? Execution
  // Create all the cells of our grid by looping through the cell count
  // The cells will be added to the cells array when they are created
  // We are appending these cells to the grid also
  function createGrid(){
    for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')
      cell.innerText = i // will remove at the end. for now its for reference
      cell.id = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    console.log('the grid is created')
  }

  // ! Function for when the player clicks on a column

  // We might need 2 functions here. One for the gridClick and one for changing turns

  // - We need a function for every time the user clicks on the grid
  function gridClick(event){
    // We need to check to see if there is a class of yellow circle or red circle in any of the cells.
    if (!event.target.classList.contains('player1image', 'player2image')) {
      console.log('space empty, life empty, everything empty') // this will only log if the cell does not contain a class of player1image
    } else {
      console.log('can\'t touch this')
    }
  }
  
  //! Changing players at the end of their turn
  //? Elements
  const players = ['player1', 'player2']
  const player1 = document.querySelector('.player1image')
  const player2 = document.querySelector('.player2image')

  function clickTurn(event){
    
  }
  
  // - If there is the function that checks for any cell in that column - to only look through columns I could use %
  // and look for the remainder for each column. For example the remainder for column 5 would be 5.
  // - The function will look for an empty cell and place the class (yellow/red) in it.
  // - If there are no empty spaces then it will return an invalid input and the user could be prompted to click on another column
  // - I need to think about how to check to see if there is a winner.
  //     - ? A function that loops on every grid click to see if there is a 4 would need to look for:
  //         - 4 diagonally - one end of a cell could be cell(number) and so 4 diagonally would be:
  //             1st of the 4 in a row: number 
  //             2nd of the 4 in a row: number + 8
  //             3rd of the 4 in a row: number + 8 + 8
  //             4th in the 4 in a row: number + 8 + 8
  //         - 4 in a row line is 
  //             1st: number
  //             2nd: number + 1
  //             3rd: number + 2
  //             4th: number + 3
  //         - 4 in a column line is
  //             1st: number 
  //             2nd: number + 7
  //             3rd: number + 7 + 7
  //             4th: number + 7 + 7 + 7

  // ! Function for the startButton
  function startClick(){

  }
  // - We need a function for the start button

  // - If there is the function that checks for any cell in that column - to only look through columns I could use %
  // and look for the remainder for each column. For example the remainder for column 5 would be 5.
  // - The function will look for an empty cell and place the class (yellow/red) in it.
  // - If there are no empty spaces then it will return an invalid input and the user could be prompted to click on another column
  // - I need to think about how to check to see if there is a winner.
  //     - ? A function that loops on every grid click to see if there is a 4 would need to look for:
  
  //         - 4 diagonally - one end of a cell could be cell(number) and so 4 diagonally would be:
  //             1st of the 4 in a row: number 
  //             2nd of the 4 in a row: number + 8
  //             3rd of the 4 in a row: number + 8 + 8
  //             4th in the 4 in a row: number + 8 + 8
  //         - 4 in a row line is 
  //             1st: number
  //             2nd: number + 1
  //             3rd: number + 2
  //             4th: number + 3
  //         - 4 in a column line is
  //             1st: number 
  //             2nd: number + 7
  //             3rd: number + 7 + 7
  //             4th: number + 7 + 7 + 7
  

  // ! Function to check for a row of 4 and also for draws
  //    - I need to think about how to include draws.

























  // There needs to be a click event on every column. - The user choosing which column to put a circle in
  // There needs to be a click event on the start button
  // startButton.addEventListener('click', startClick)
  // buttons.forEach(btn => btn.addEventListener('click', gridClick))
  createGrid()
  cells.forEach(cl => cl.addEventListener('click', gridClick))
}

window.addEventListener('DOMContentLoaded', init)