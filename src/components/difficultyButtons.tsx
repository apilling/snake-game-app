import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";



export function DifficultyButtons({difficulty, setDifficulty}: {difficulty: number, setDifficulty: (d: number) => void}): JSX.Element {
    const normalDifficulty = () => {
        setDifficulty(100)
    }

    const hardDifficulty = () => {
        setDifficulty(50)
    }

    const whyDifficulty = () => {
        setDifficulty(10)
    }
    return (
        <ButtonGroup size="lg" className="mb-2" >
            <Button onClick={normalDifficulty}>Normal</Button>
            <Button onClick={hardDifficulty}>Hard</Button>
            <Button onClick={whyDifficulty}>Why Is It So Fast?</Button>
        </ButtonGroup>
    )

}