import { useEffect, useRef, useState } from "react";
import Orange from  "../orange_square.png"
import Snake from  "../blue_square.png"
import Food from  "../purple_square.png"
import './snakeBoard.css'

export var score = 0;

export function SnakeBoard({showLoserModal, updateScore, speed, setSpeed}: 
    {showLoserModal: (b: boolean) => void, updateScore: (n: number)=> void, speed: number, setSpeed: (s: number) => void}): JSX.Element {
    
    

    const width = 72;
    const height = 44;
    let initialRows: string[][] = [];
    for (var i = 0; i < height; i++) {
        initialRows.push([]);
        for (var j = 0; j < width; j++) {
            initialRows[i].push("blank");
        }
    }

    const randomPosition = () => {
        const position = {
            x: Math.floor(Math.random()*height),
            y: Math.floor(Math.random()*width)};
        return position;    
    }

    const [rows, setRows] = useState(initialRows);
    const [snake, setSnake] = useState([{x:0,y:0}]);
    const [direction, setDirection] = useState("right");
    const [food, setFood] = useState(randomPosition);


    const changeDirectionWithKeys = (e: { keyCode: any }) => {
        var { keyCode } = e;
          switch(keyCode) {
            case 37:
                    setDirection('left');
                    break;
            case 38:
                    setDirection('top');
                    break;                   
            case 39:
                  setDirection('right');
                  break;
            case 40:
                  setDirection('bottom');
                  break;
            default:
                break;            
              }
        }
        
    document.addEventListener("keydown", changeDirectionWithKeys, false);
    


    const displaySnake = () => {

        const newRows = initialRows.map((row: string[]): string[] => [...row]);

        snake.forEach(cell => {

            newRows[cell.x][cell.y]="snake";

        })
        newRows[food.x][food.y]="food";
        setRows(newRows);

    }

    const gameEndFunction = () => {
       showLoserModal(true)
    }

    const difficultyButtonHandler = () => {
        setSpeed(speed)
    }

    const moveSnake = () => {
        const newSnake = [];
        switch(direction) {
            case 'right':
                newSnake.push({x: snake[0].x, y: (snake[0].y + 1)%width})
                break;
            case 'left':
                newSnake.push({x: snake[0].x, y: (snake[0].y - 1 + width)%width})
                break;
            case 'top':
                newSnake.push({x: (snake[0].x - 1 + height)%height, y: snake[0].y})
                break;
            case 'bottom':
                newSnake.push({x: (snake[0].x + 1)%height, y: snake[0].y})
        }
            snake.forEach(cell=> {
                newSnake.push(cell);
            })
        if (snake.length > 1) {
            for (let i = 1; i < snake.length; i++) {
                if(snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
                    gameEndFunction();
                    return;
                }
            }
        }    
        if(snake[0].x === food.x && snake[0].y === food.y) {
            if (speed === 100) {
                score += 50;
            } else if (speed === 50){
                score += 100;
            } else {
                score += 200;
            }

            updateScore(score)
            setFood(randomPosition);

        }else {
            newSnake.pop();
        }
        setSnake(newSnake);
        displaySnake();
        difficultyButtonHandler();
    }

    
    useInterval(moveSnake, speed);
    

    

    function useInterval(callback: () => void, delay: number) {
        const savedCallback = useRef(callback);
  
        useEffect(() => {
        savedCallback.current = callback;
        }, [callback]);
    
        useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        }, [delay]);
    }

    

    const displayRows = rows.map( row => 
        <div className = "divClass">
            {row.map(e => {
                switch(e) {
                    case "blank":
                        return <img className="orange_square" src={Orange}/>
                    case "snake":
                        return <img className="snake_square" src={Snake}/>
                    case "food" :
                        return <img className="food_square" src={Food}/>
                
                }
            })

            }
        </div>
    );

    
    
    return (<div className="whole_board">
        { displayRows }
        </div>)
}