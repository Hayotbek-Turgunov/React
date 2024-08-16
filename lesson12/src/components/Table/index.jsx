/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";

export const Table = () => {
  const [student, setStudents] = useState([]);
  console.log(student);

  const url =
    "https://sheet.best/api/sheets/ca0199c2-f582-4e97-a648-673a46d97ab4/tabs/students";

  // Status
  // 200 - succes
  // 200 - secces
  // 401 - login qilinmagan
  // 404 - not fount sahifa topilmadi

  const getData = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setStudents(res));
  };

  useEffect(() => {
    getData();
  }, []);

  const onDelete = (id) => {
    fetch(`${url}/id/${id}`, {
      method: "DELETE",
    }).then(() => getData());
  };

  return (
    <div>
      <h1>Student List {student?.length}</h1>
      {/* <input onChange={searchByName} type="text" placeholder="name" /> */}
      {/* <input onChange={searchByTel} type="text" placeholder="telefon" /> */}
      <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Telefon</th>
            <th>Age</th>
            <th>Department</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {student?.map((std) => {
            return (
              <tr key={std.id}>
                <td>{std.id}</td>
                <td>{std.name}</td>
                <td>{std.phone}</td>
                <td>{std.age}</td>
                <td>{std.department}</td>
                <td
                  onClick={() => onDelete(std.id)}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
