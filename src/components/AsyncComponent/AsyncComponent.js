import { useEffect, useState } from "react";

export const AsyncComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 1100);
  }, []);

  return <>{data && <div>DATA</div>}</>;
};
