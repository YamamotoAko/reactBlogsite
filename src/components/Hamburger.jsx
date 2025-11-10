import hamburgerImg from './../assets/images/DrawerButton.svg';

export default function HamburgerMenu() {
  return (
    <div
      style={{
        width: 25,
        height: 20,
      }}
    >
      <img
        src={hamburgerImg}
        alt="menu"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
}
