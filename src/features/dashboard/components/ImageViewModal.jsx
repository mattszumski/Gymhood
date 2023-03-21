import ReactDom from "react-dom";
import { Modal } from "../../../components/styled/Modal.styled";
import { Overlay } from "../../../components/styled/Overlay.styled";

const ImageViewModal = ({ imageSrc, closeFn }) => {
  return ReactDom.createPortal(
    <>
      <Overlay onClick={closeFn} />
      <Modal>
        <button onClick={closeFn}>Close</button>
        <img src={imageSrc} width="90%" />
      </Modal>
    </>,
    document.getElementById("portal")
  );
};

export default ImageViewModal;
