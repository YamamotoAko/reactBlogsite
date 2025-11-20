import FirstViewImg from './FIrstviewImg';
import firstview from './../../assets/images/firstview.jpg';

export default function FirstView() {
  return (
    <>
      <div className='firstview'>
        <h1>
          BAMOS DESIGN
        </h1>
        <FirstViewImg firstviewSrc={firstview} />
      </div>
    </>
  );
}
