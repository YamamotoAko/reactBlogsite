import thumbDown_n from './../assets/images/thumbDown_n.svg';
import thumbDown_b from './../assets/images/thumbDown_b.svg';
import { useState } from 'react';

export default function DisLikeButton({ init = 0 }) {
  // カウント数
  const [count, setCount] = useState(init);

  const handleClick = () => {
    setCount(count !== init ? count - 1 : count + 1);
  };

  return (
    <div className="dislikeBox">
      <button
        className={count !== init ? 'dislikeButton like' : 'dislikeButton'}
        onClick={handleClick}
      >
        <img src={count !== init ? thumbDown_b : thumbDown_n} alt="thumbdown" />
        <span className="count">{count}</span>
      </button>
    </div>
  );
}
