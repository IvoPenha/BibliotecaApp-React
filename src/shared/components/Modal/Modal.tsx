import { Modal as BsModal } from 'react-bootstrap';
import { ModalProps } from '../..';

export const Modal = ({ show, onHide, title, children } : ModalProps) => {
  return (
    <BsModal show={show} onHide={onHide}>
      <BsModal.Header closeButton>
        <BsModal.Title>{title}</BsModal.Title>
      </BsModal.Header>
      <BsModal.Body>{children}</BsModal.Body>
      <BsModal.Footer>
      </BsModal.Footer>
    </BsModal>
  );
};
