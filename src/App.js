import React from "react"
import boxes from "./boxes"
import Box from "./Box"
import './index.css';

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        // setSquares(prevSquares => {
        //     return prevSquares.map((square) => {
        //         return square.id === id ? {...square, on: !square.on} : square
        //     })
        // })
        setSquares(prevSquares => {
            let newSquares = [...prevSquares];
            newSquares[id - 1].on = !newSquares[id - 1].on;
            return newSquares;
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={(evt) => {
              toggle(square.id);
              console.log(evt);
            }} //  toggle={(evt) => toggle(square.id)}
        />
    ))
    
    return (
        <main className="field">
            {squareElements}
        </main>
    )
}
