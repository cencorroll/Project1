# projectONE
A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc. (completed post project)

Project One - Connect 4

Connect 4 is a two-player board game in which the players take turns dropping a counter into a 7x6 grid. Counters are placed from the bottom of columns going up and the winner is announced when a row of 4 counters is made horizontally, vertically or diagonally.

Overview and Concept

  The game was to be created using HTML, CSS and Javascript.

Technologies Used

  HTML
    - Connect 4 to show in the browser tab
    - Header with connect 4 title
    - Subheading for my name
    - A span with an id of a result that would appear when someone has won
    - A grid div within another div for styling
    - A span to announce the winner at the end of the game
    - A restart button to reload the game (refresh the page)

  CSS 
    - Flex-box use for the body and grid
    - Border styling for the grid and button
    - CSS transitions for the text and for the winner announcement

  JavaScript
    - Grid created in JavaScipt using appendChild and push methods
    - Click event to place counters in columns.
    - A function to check for a row of four of the same counters


The Approach Taken

  Day 1-2
    I produced a wireframe and plan. I had thought of the logic behind the JavaScript first before thinking about the HTML and CSS. I thought the logic would help me with how I wanted to position elements.

  Day 2
    I built the grid using JavaScript by creating a new element for the individual cells within the grid. I created a row number for each cell by using dataset.row and Math.floor and then added it. This was done with a for loop cycling through each cell.

  Day 3
    I started working on what I wanted to happen when the player clicked on the grid.
    I used a for loop which included a modulus and an iteration of +width. The aim was to add the required class(counter) when the player clicks on the grid at a certain column. This had to be placed in the last available row within that column. The iteration of +width meant that when the gridClick runs then the for loop would only check the cells within that column and not anywhere else. 
    Outside of the for loop I then made sure that the class appears in the last available cell within the column clicked and that the current player switches on every click.

  Day 4
    I started to look into win conditions for when a row of four is made. After doing research I decided to create nested arrays within another array called winArray. The nested arrays contained 4 id numbers that were the combinations that could lead to a win. 
    I then created a function that would loop 4 times to check if there was a combination of cell ids, with a player's counter, that were the same as one of the nested win arrays. If it did then the winner would be announced within the result span along with text instructing the players to restart the game. I had to create objects with details for the players such as the class that would be added the the cells and an additional feature of having their actual names, that were inputted using a window.prompt, in the game.

  Day 5
    This day was spent styling and adding animations to create the look I wanted for the game.
  
  Day 6
    I noticed that when the page loads and the players names were inputted that the player 1's name would not appear in the span I specified as who's turn it was. I spent the majority of the day trying to chase down where the issue was and if there was another way to work around this issue. I also had to find a way to make sure that the players could not keep adding counters after a winner was announced.

  Day 7
    This day was spent cleaning up my code and revisiting the brief to see what outstanding tasks I had.
    I also found another problem in that the winner announced was not the actual winner but the player who was going to have their turn if a winning array was not found.
  

On page load
  - The players are asked to input their names for player 1 and player 2.

Start of game
  - The grid is generated and the players can click on the grid to add their counters in turns. This continues until someone gets a row of 4.

End of game
  The function checkBoard is declared within the gridClick function and so it is running on every click. If a click results in a row of four then the result will appear and a player will be instructed to restart the game.


Key Learnings
  - Having an array of winning conditions set up and checking through to find id the current state of the game contains it.
  - Adding a row to each cell using division and then Math.floor to round it up to the next integer so that 15 is in the same row as 21 if divided by 7 but not in the same row as 14.
  - Using ternary operators for turns
  - Using objects for each player

  Future improvements
  - Creating an animation to show the counters dropping to their positions

  Bugs
  - The player announced at the end is the player who's turn it would've been has a row of four not been found, rather than the actual winner.