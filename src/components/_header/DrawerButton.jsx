import drawerbuttonImg from './../../assets/images/DrawerButton.svg';

export default function DrawerButton({ open, isOpen }) {
  const handleClick = () => {
    isOpen(!open);
  };

  return (
    <>
      <button
        className={open ? 'drawerButton open' : 'drawerButton'}
        onClick={handleClick}
      >
        <img
          src={drawerbuttonImg}
          alt="ドロワーボタン"
          className={open ? 'active' : ''}
        />
        <span>{open ? 'CLOSE' : 'MENU'}</span>
      </button>
    </>
  );
}
