import Modal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1200,
    },
  
    content: {
      backgroundColor: '#ffffffae',
      maxWidth: 'calc(100vw - 48px)',
      maxHeight: 'calc(100vh - 24px)',
      padding: 5,
      border: 'none',
      position: 'static',
      borderRadius: 0,
      overflow: 'hidden',
    },
  };
  
  Modal.setAppElement('#root');
  
  export const ModalImg = ({ largeImgURL, tags, isModalOpen, onClose }) => {
    return (
      <>
        <Modal
          isOpen={isModalOpen}
          onAfterOpen={() => disableBodyScroll(document)}
          onAfterClose={() => enableBodyScroll(document)}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel="Example Modal"
          >
          <img src={largeImgURL} alt={tags} />
        </Modal>
      </>
    );
  };
  
  