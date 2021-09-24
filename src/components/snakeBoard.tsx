import { useState } from "react";
import Orange from  "../orange_square.png"
import './snakeBoard.css'



export function SnakeBoard(): JSX.Element {

    let initialRows: string[][] = [];
    for (var i = 0; i < 44; i++) {
        initialRows.push([]);
        for (var j = 0; j < 72; j++) {
            initialRows[i].push('blank');
        }
    }

    const [rows, setRows] = useState(initialRows);

    const displayRows = rows.map( row => 
        <div className = "divClass">
            {row.map(e => {
                switch(e) {
                    case 'blank':
                        return <img className="orange_square" src={Orange}/>
                }
            })

            }
        </div>
    );
    
    
    return (<div className="whole_board">
        { displayRows }
    </div>)
}