import React from "react";

interface Props {
  position: string;
  children?: React.ReactNode;
  height: string;
  onChange: () => void;
  width: string;
  classname: string;
  lblclassname: string;
  type: string;
  id: string;
  placeholder: string;
  text: string
}

const InputPass: React.FC<Props> = ({
    position,
    children,
    height,
    onChange,
    width,
    type,
    id,
    placeholder,
    classname,
    lblclassname,
    text
  }) => {
  return (
  <form>
    <label classname={lblclassname} for = {type} > {text} </label>
    <input
      onChange={onChange}
      style={{
         position: position,
         height,
         width}}
         type: "password"   ???????????????????????????
    >
    {children}
    </input>
  </form>
  );
}
 export default InputPass;