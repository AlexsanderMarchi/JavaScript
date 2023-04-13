// Get all squares on the board
const squares = document.querySelectorAll('.square');

// Add a click event listener to each square
squares.forEach(square => {
  square.addEventListener('click', () => {
    // Get the piece on the clicked square
    const piece = square.querySelector('.piece');

    // If the clicked square has a piece, move it to a random empty square
    if (piece) {
      // Get all empty squares on the board
      const emptySquares = document.querySelectorAll('.square:not(.black):empty');

      // If there are empty squares, pick one at random and move the piece
      if (emptySquares.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        const randomEmptySquare = emptySquares[randomIndex];
        randomEmptySquare.appendChild(piece);
      }
    }
  });
});
