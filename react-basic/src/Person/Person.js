import React from "react";
const person = (props) => {
  return (
      <div>
        <p>Hello, I'm {props.name}, No.{props.number}</p>
        <input type="text" defaultValue={props.name} />
        <button onClick={props.myClick}>删除{props.id}</button>
      </div>
  )
};

export default person;
