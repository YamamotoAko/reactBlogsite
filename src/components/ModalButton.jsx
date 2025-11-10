import { useState } from 'react';
import modalImg from './../assets/images/modalImg.jpg';
import CloseButton from './CloseButton';
import Age from './Age';
import FormCheck from './FormCheck';
import FormTextarea from './FormTextarea';
import Formlist from './Formlist';
import Submit from './Submit';

export default function ModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="modalWrapper">
        <button className="modalButton" onClick={openModal}>
          Feedback
        </button>

        {isOpen && (
          // modalOverlayはモーダルが出た時の背景
          <div className="modalOverlay" onClick={closeModal}>
            {/* モーダルの表示される画面 */}
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              <CloseButton setIsOpen={setIsOpen} />
              <div className="modalImg">
                <img src={modalImg} alt="" />
              </div>

              <div className="modaltext">
                <h2>FEEDBACK</h2>
                <p>
                  Thank you for visiting BAMOS DESIGN.Please take a moment to
                  complete our survey to help us improve our services.
                </p>
              </div>
              <form className="form" action="#">
                <Age />
                <Formlist />
                <FormCheck />
                <FormTextarea />
                <Submit />
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
