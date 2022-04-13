
1. First I added some HTML elements
2. Created a grid in JS using createElement
3. Did a little bit of basic styling in CSS
4. Added my images for player 1 and player 2 in classes
5. Going to pseudocode for the startButton

6. Today I had to get help from the TAs and Sam
  - The cell count was changed to width * height
  - The function for gridClick was changed a lot
    - I originally had the modulus in the if statement for checking to see if there was a class in the element. This was removed because having an if statement with one bit with a modulus and then adding a && for the next part means nothing. It is not linked. It can be either or. So what it was doing was checking to see if any cells had a remainder of a specified number and then also checking to see if any cells didnt have a class. It wasn't dependent on each other. 
    - I moved the modulus into a new for loop with an undefined variable above it to say that there is a variable called lastIndex that will be defined within the for loop, but not before.
    - A way to look for an index within an array is to use square notation. My array was defined earlier (cells = []). The id of any cell was found by using this = cells[i]. 'i' was put in my for loop and i added my parameters there. 
    - index was defined as a variable at the beginning of the function. It would log back a string and so parseInt was used to change it into a number.
    - I defined the  last index within the for loop and specifically within the if statement for containing a class for the players. I then used the add method to add the image once the last available index was found.
    - In the loop the i++ was changed to i+= width. This is saying everytime its looping it has to check the next i which is the current i value + the width which is 6. If i = 14 then it would check the 20th index on the next loop. It would only add an image on the last available cell in that column. The columns are checked within the for loop by using that iteration of i+=.