import { Button, Modal } from "react-bootstrap";
import { score } from "./snakeBoard";
import "./loserModal.css"


export function LoserModal({visible, setVisible}: {visible: boolean, setVisible: (b: boolean) => void}): JSX.Element {
    const hide = () => setVisible(false);


    return (
        <Modal 
        className='modal' 
        show={visible} 
        onHide={hide}
        centered>
            

            <Modal.Body>
                <h1 className='modal_lose'>You Lose!</h1>
                <h3 className='modal_score'>Final Score: {score}</h3>
            </Modal.Body>

            <Modal.Footer className='modal_button'>
                <Button  variant="primary" onClick={() => window.location.reload()}>Play Again</Button>
            </Modal.Footer>
        </Modal>
    )

}