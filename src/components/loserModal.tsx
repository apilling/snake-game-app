import { Button, Modal } from "react-bootstrap";
import { score } from "./snakeBoard";


export function LoserModal({visible, setVisible}: {visible: boolean, setVisible: (b: boolean) => void}): JSX.Element {
    const hide = () => setVisible(false);


    return (
        <Modal show={visible} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>You Lose!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Score: {score}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={() => window.location.reload()}>Play Again</Button>
            </Modal.Footer>
        </Modal>
    )

}