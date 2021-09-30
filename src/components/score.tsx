import { score } from "./snakeBoard";
import './score.css'


export function CurrentScore({playerScore, setPlayerScore}: {playerScore: number, setPlayerScore: (n: number) => void}): JSX.Element {
    return (
        <h2><strong className='score_word'>SCORE:</strong> <strong className='score_display'>{score}</strong></h2>
    )
}