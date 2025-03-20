import Modal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({ isOpen, image, closeModal }) => {

  if (!image) return null; 

  
  return (
    
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
      onKeyDown={(e) => {
        if (e.key === "Escape") closeModal(); 
      }}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <div className={css.modalContent}>
        <img src={image} alt="Large view" className={css.modalImage} />
        <button onClick={closeModal} className={css.closeBtn}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;