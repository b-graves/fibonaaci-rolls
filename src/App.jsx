import { useState } from "react";
import "./App.css";

function App() {
  // the squares variable stores a list of rows of squares storing the colour of the square
  // e.g. a 3x3 grid might look like:
  //
  // [
  //    ["red", "white", "yellow"],
  //    ["black", "blue", "white"],
  //    ["white", "black", "red"],
  // ]
  //
  // the initial value of this is set to [], i.e. we start with no squares
  const [squares, setSquares] = useState([]);

  const fibonacciNumber = () => {
    // this function gives us a random fibonacci number from 0, 1, 1, 2, 3, 5
    const numbers = [0, 1, 1, 2, 3, 5];

    const random = Math.floor(Math.random() * numbers.length);

    return numbers[random];
  };

  const getColor = (number) => {
    // this function gives us a colour based on a random fibonacci colour
    switch (number) {
      case 0:
        return "white";
      case 1:
        return "black";
      case 2:
        return "blue";
      case 3:
        return "red";
      case 5:
        return "yellow";
    }
  };

  const createSquares = (number) => {
    // this function creates as many squares as we ask for populated with a colour, e.g. createSquares(5) with gives us a list of five squares like ["red", "white", "yellow", "blue", "yellow"]
    let squares = [];
    for (let i = 0; i < number; i++) {
      squares.push(fibonacciNumber());
    }
    return squares;
  };

  const rollDice = () => {
    // this function happens when we roll the dice, we want to increase the number of rows and columns by 1

    // first add a new square to the end of each row to increase the number of columns by one
    let newSquares = squares.map((row) => row.concat(createSquares(1)));

    // then add another row to the bottom of the grid to increase the number of rows by 1
    let rowLength;
    if (newSquares.length > 0) {
      rowLength = newSquares[0].length;
    } else {
      rowLength = 1;
    }
    newSquares.push(createSquares(rowLength));

    // update our squares variable
    setSquares(newSquares);
  };

  return (
    <div className="App">
      <div className="title">Fibonacci Rolls</div>
      {squares.length ? (
        <div className="grids">
          <div className="grid">
            {squares.map((row) => (
              <div className="row">
                {row.map((square) => (
                  <div
                    className="square"
                    style={{
                      border: "1px solid black",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      className="label"
                      style={{
                        color: "black",
                        fontSize: Math.ceil(200 / squares.length),
                      }}
                    >
                      {square}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="grid">
            {squares.map((row) => (
              <div className="row">
                {row.map((square) => (
                  <div
                    className="square"
                    style={{
                      backgroundColor: getColor(square),
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="instruction">PRESS ROLL TO START </div>
      )}
      <div className="controls">
        {/* a button where every time we click it the dice is rolled */}
        <button onClick={rollDice} className="roll-button">
          ROLL
        </button>
      </div>
    </div>
  );

  // return (
  //   // the outermost container of the app
  //   <div className="App">
  //     {/* the section of the screen where the grid is displayed */}
  //     <div className="grid">
  //       {squares.length ? (
  //         //  if we have some squares to render, loop over those rows of squares creating divs of that colour
  //         squares.map((row) => (
  //           <div className="row">
  //             {row.map((square) => (
  //               <div
  //                 className="square"
  //                 style={{
  //                   backgroundColor: getColor(square),
  //                   color: getContrastColor(square),
  //                 }}
  //               >
  //                 {square}
  //               </div>
  //             ))}
  //           </div>
  //         ))
  //       ) : (
  //         //  if no squares have been created yet, instruct the user on how to create squares
  //         <div className="instruction">PRESS ROLL TO START </div>
  //       )}
  //     </div>
  //     {/* the section of the screen where the roll button is displayed */}
  //     <div className="controls">
  //       {/* a button where every time we click it the dice is rolled */}
  //       <button onClick={rollDice} className="roll-button">
  //         ROLL
  //       </button>
  //     </div>
  //   </div>
  // );
}

export default App;
