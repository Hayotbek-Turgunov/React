import { useState } from "react";

import { students } from "../mock/student";

const Root = () => {
  const [stds, setStudents] = useState(students);

  const onDelete = (id) => {
    console.log(id, "iidd");
    let res = stds.filter(([val]) => val !== id);
    setStudents(res);
  };

  return (
    <div>
      <h1>Students List</h1>
      {stds.map(([title]) => {
        return (
          <h3 key={title}>
            {title} - <button onClick={() => onDelete(title)}>Delete</button>
          </h3>
        );
      })}
    </div>
  );
};

export default Root;
