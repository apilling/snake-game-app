import { score } from "./snakeBoard";


export function CurrentScore({playerScore, setPlayerScore}: {playerScore: number, setPlayerScore: (n: number) => void}): JSX.Element {
    return (
        <h2>Score: {score}</h2>
    )
}