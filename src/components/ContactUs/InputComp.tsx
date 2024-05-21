import React from "react";

interface InputProps {
  placeholder: string;
}
const InputComp: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <div>
      <label htmlFor={placeholder} className="">
        <input type="text" placeholder={placeholder} className="w-[600px] outline-none border-none bg-gray-100 mb-6 px-4 py-8 rounded text-base" />
      </label>
    </div>
  );
};

export default InputComp;
