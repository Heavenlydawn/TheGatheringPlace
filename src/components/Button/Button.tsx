import React from "react";
interface ButtonProps {
  text: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success';
}
const Button: React.FC<ButtonProps> = ({ text, color = 'primary' }) => {
  const baseClasses = "gp-text-h5 py-5 px-8 rounded-md";
  const colorClasses = {
    primary: "gp-text-h5 text-black gp-brown py-5 px-8 rounded-md",
    secondary: "gp-text-h5 text-[#FFD2A4] gp-dark py-5 px-8 rounded-md",
    danger: "text-white bg-red-500 gp-text-h5 py-5 px-8 rounded-md",
    success: "text-white bg-green-500 gp-text-h5 px-8 rounded-md"
  };
  return (
    <button className={`${baseClasses} ${colorClasses[color]}`}>
      {text}
    </button>
  );
};
export default Button;