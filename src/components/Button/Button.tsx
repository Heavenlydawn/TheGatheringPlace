import React from "react";
interface ButtonProps {
 text:string
}

const Button: React.FC<ButtonProps> = ({ text}) => {
  return (
    <button className="gp-text-h5 text-black gp-brown py-5 px-8 rounded-md">
      {text}
    </button>
  );
};

export default Button;
