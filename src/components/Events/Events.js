import { useEffect, useState } from "react";

export const Events = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <>
      {data && <div>DATA</div>}
      {toggle && <div data-testid="toggle-elem">TOGGLE ON</div>}
      <button onClick={onClick} data-testid="toggle-btn">
        Click me!
      </button>
    </>
  );
};
