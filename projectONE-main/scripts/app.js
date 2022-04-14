function init() {
  const grid = document.querySelector('#grid')
  const width = 7
  const height = 6
  const cellCount = width * height
  const cells = []
  let currentPlayer = 1
  const result = document.querySelector('#result')
  const endOfGame = document.querySelector('#endofgame')
  let canPlay = true
  const playerturn = document.querySelector('#playerturn')

  const winArray = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34]
  ]

  const players = {
    1: {
      className: 'player1',
      name: window.prompt('Player 1 name:'),
    },
    2: {
      className: 'player2',
      name: window.prompt('Player 2 name:'),
    },
  }
  playerturn.innerHTML = `${players[currentPlayer].name}`


  // ! Function to create a grid

  // ? Grid Creation
  // Create all the cells of our grid by looping through the cell count
  // The cells will be added to the cells array when they are created
  // We are appending these cells to the grid
  function createGrid(){
    for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')
      cell.id = i
      cell.dataset.row = Math.floor(i / width)
      grid.appendChild(cell)
      cells.push(cell)
    }
    console.log('the grid is created')
  }


  // ! Function for when the player clicks on anywhere within the grid

  function gridClick(event){
    if (canPlay){
      const index = parseInt(event.target.id)
      // We need to check to see if there is a class of yellow circle or red circle in any of the cells.
      if (!event.target.classList.contains('playerpiece')) {
        console.log('space empty') // this will only log if the cell does not contain a class specified
      } else {
        console.log('not empty')
      }

      let lastIndex
      for (let i = index % width; i < cellCount; i += width){
        if (!cells[i].classList.contains('playerpiece')){
          lastIndex = i
        } 
        console.log(cells[i])
      }

      currentPlayer = currentPlayer === 1 ? 2 : 1 // this works
      playerturn.innerHTML = `${players[currentPlayer].name}`
      cells[lastIndex].classList.add('playerpiece',players[currentPlayer].className) // this needs to add the class of the current player
      setTimeout(checkBoard, 1000)
    }
  }
  

  // ! Function to check for a row of 4

  function checkBoard() {
    for (let i = 0; i < winArray.length; i++) {
      const count1 = cells[winArray[i][0]]
      const count2 = cells[winArray[i][1]]
      const count3 = cells[winArray[i][2]]
      const count4 = cells[winArray[i][3]]

      // check the cells to see if they all have the class of player1
      if (
        count1.classList.contains('player1') &&
        count2.classList.contains('player1') &&
        count3.classList.contains('player1') &&
        count4.classList.contains('player1')
      ) {
        setTimeout(() => {
          result.innerHTML = `${players[1].name} Wins!`
          endOfGame.innerHTML = 'Press restart to play again'
          canPlay = false
        })
        setTimeout(1000)
      }
      // check the cells to see if they all have the class of player2
      if (
        count1.classList.contains('player2') &&
        count2.classList.contains('player2') &&
        count3.classList.contains('player2') &&
        count4.classList.contains('player2')
      ) {
        setTimeout(() => {
          result.innerHTML = `${players[2].name} Wins!`
          endOfGame.innerHTML = 'Press restart to play again'
          canPlay = false
        })
        setTimeout(1000)
      }
    }
  }

  createGrid()
  cells.forEach(cl => cl.addEventListener('click',gridClick))
}

window.addEventListener('DOMContentLoaded', init)