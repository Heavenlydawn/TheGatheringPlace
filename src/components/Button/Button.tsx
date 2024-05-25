import React from "react";
interface ButtonProps {
  text: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  onClick?:any;
}
const Button: React.FC<ButtonProps> = ({ text, color = 'primary', onClick }) => {
  const baseClasses = "gp-text-h5 py-2 md:py-5 px-4 md:px-8 rounded-md outline-none border-none";
  const colorClasses = {
    primary: "text-black gp-brown",
    secondary: "text-[#FFD2A4] gp-dark",
    danger: "text-white bg-red-500",
    success: "text-white bg-green-500"
  };
  return (
    <button className={`${baseClasses} ${colorClasses[color]}`} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;