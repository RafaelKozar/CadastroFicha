import { observer } from "mobx-react-lite"
import { Button, Modal, ModalActions } from "semantic-ui-react"
import { useStore } from "../stores/store";


export default observer(function ModalContainer() {
    const { modalStore,  } = useStore();
    return (
        <Modal open={modalStore.modal.open} onClose={modalStore.closeModal} trigger>
            <Modal.Header>
                {modalStore.sucesso ? "Cadastro Realizado com sucesso" : "Ops, aconteceu algum problema"}
            </Modal.Header>
            <Modal.Content>
                {modalStore.modal.body}
            </Modal.Content>
            <ModalActions>
                <Button onClick={modalStore.closeModal}>OK</Button>
            </ModalActions>
        </Modal>
    )
})