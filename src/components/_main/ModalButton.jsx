import { useState } from 'react';
import Button from './Button';
import ModalWindow from './form/ModalWindow';

export default function ModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="modalWrapper">
          <Button onClick={openModal} label='FeedBack' />
        {isOpen && <ModalWindow setIsOpen={setIsOpen} />}
      </div>
    </>
  );
}
