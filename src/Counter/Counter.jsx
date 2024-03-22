import { useState } from 'react';
import './Counter.css';
export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClickCount = () => {
    setCount(count + 1);
  };
  const handleMultiplyCount = () => {
    setCount(count * 10);
  };
  const handleDivideCount = () => {
    setCount(count / 10);
  };
  const handleMultiplyByItself = () => {
    setCount(count * count);
  };
  return (
    <div className="task1">
      <div className="header">
        <div>
          <div curs onClick={handleMultiplyCount} className="circle red">
            *10
          </div>
          <div onClick={handleDivideCount} className="circle yellow">
            /10
          </div>
          <div onClick={handleMultiplyByItself} className="circle green">
            **
          </div>
        </div>

        <h3>Counter</h3>
      </div>
      <div className="main_display">
        <div className="display">{count}</div>
        <button onClick={handleClickCount}>Count</button>
      </div>
    </div>
  );
}