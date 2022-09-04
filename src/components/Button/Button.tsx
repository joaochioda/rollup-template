import React, {useState} from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const [count, setCount] = useState(0);
  return <>
  <p>{`Clicked times: ${count}`}</p>
  <button onClick={()=> setCount((c)=>c+1)}>{props.label}</button>
  </>
};

export default Button;
