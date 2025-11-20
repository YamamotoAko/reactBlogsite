import { useState } from 'react';
import like_n from './../../assets/images/thumbUp_n.svg';
import like_r from './../../assets/images/thumbUp_r.svg';

export default function LikeButton({ init = 0 }) {
  // カウント数
  const [count, setCount] = useState(init);

  const handleClick = () => {
    setCount(count !== init ? count - 1 : count + 1);
  };

  return (
    <div className="likeBox">
      <button
        className={count !== init ? 'likeButton like' : 'likeButton'}
        onClick={handleClick}
      >
        <img src={count !== init ? like_r : like_n} alt="thumbUp" />
        <span className="count">{count}</span>
      </button>
    </div>
  );
}
