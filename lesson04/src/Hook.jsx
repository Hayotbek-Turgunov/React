import { useEffect, useState } from "react";

const HooksComponent = () => {
  const [title, setTite] = useState("webrain");
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  //case 1
  useEffect(() => {
    console.log("case 1");
  });

  //case 2 - bir martta ishlayid holos.Backenddan malumot olib kelishda foydalanamiz.
  useEffect(() => {
    console.log("case 2");
  }, []);

  //case 3 - doim react yurganda count qiymati o'zgaradigan bolsa render qiladi.
  useEffect(() => {
    console.log("case 2");
  }, [count]);

  //case 4 - doim react yurganda count qiymati o'zgaradigan bolsa render qiladi.Maltpl qilib ishlatsak boladi bizda.
  useEffect(() => {
    console.log("case 2");
  }, [title, count]);

  const onChange = (e) => {
    setTite(e.target.value);
  };

  return (
    <div style={{ flex: 1 }}>
      <h1>Title: {title}</h1>
      <h1>Count: {count}</h1>
      <input onChange={onChange} type="text" value={title} />
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default HooksComponent;
