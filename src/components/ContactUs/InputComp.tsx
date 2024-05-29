import React from "react";

interface InputProps {
  placeholder: string;
}
const InputComp: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <div>
      <label htmlFor={placeholder}>
        <input
          type="text"
          id={placeholder}
          name={placeholder}     
          placeholder={placeholder}
          className="w-[280px] md:w-[600px] outline-none border-none bg-gray-100 mb-6 px-4 py-8 rounded gp-text-h5"
          required
        />
      </label>
    </div>
  );
};

export default InputComp;