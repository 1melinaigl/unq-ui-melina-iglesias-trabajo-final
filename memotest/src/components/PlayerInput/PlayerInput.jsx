import React from 'react';
import './PlayerInput.css'; 

const PlayerInput = ({name, value, onChange, placeholder }) => {
  return (
    <div className="playerInput">
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default PlayerInput;
