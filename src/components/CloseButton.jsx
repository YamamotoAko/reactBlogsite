import closeButton from './../assets/images/closebutton.svg';
export default function CloseButton({ setIsOpen }) {
  return (
    <>
      <button
        style={{
          backgroundColor: '#FFF',
        }}
        onClick={setIsOpen}
      >
        <img src={closeButton} alt="閉じる" />
      </button>
    </>
  );
}
