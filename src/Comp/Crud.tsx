import React, { useState } from "react";

function Crud() {
  const [data, setData] = useState([
    {
      name: Math.random(),
      value: "",
      placeholder: "",
    },
  ]);

  const onChangeFunc = (ev: any, ix: number) => {
    let { value } = ev.target;

    setData((prev) =>
      prev.map((elm, index) => (ix === index ? { ...elm, value } : elm))
    );
  };

  const onDeleteFunc = (ix: number) => {
    setData(data.filter((elm, index) => ix !== index));
  };

  const addFunc = () => {
    setData((prev) => [...prev, { ...data[0], name: Math.random() }]);
  };
  console.log(data);
  return (
    <div>
      {data.map((elm, ix) => (
        <div key={ix}>
          <p
            style={{ background: "red", width: "max-content0", color: "white" }}
            onClick={() => onDeleteFunc(ix)}
          >
            cross
          </p>
          <label htmlFor={`${elm.name}`}>{elm.name}</label>
          <br />
          <input
            name={`${elm.name}`}
            value={elm.value}
            onChange={(ev) => onChangeFunc(ev, ix)}
            placeholder={elm.placeholder}
            type="text"
          />
        </div>
      ))}
      <br />
      <button style={{ background: "white" }} onClick={addFunc}>
        add
      </button>
    </div>
  );
}

export default Crud;
