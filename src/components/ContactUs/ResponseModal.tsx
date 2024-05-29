import React from 'react';
import Button from '../Button/Button';

type ResponseModalProps = {
  message: string;
  onClose: () => void;
};

const ResponseModal: React.FC<ResponseModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <p className="mb-4">{message}</p>
        <Button text="CLOSE" color="secondary" onClick={onClose} />
      </div>
    </div>
  );
};

export default ResponseModal;
