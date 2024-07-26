import React from 'react';

function Button({ onClick ,  children }) {
  return (
    <button className="px-8 mx-auto py-4 rounded-lg border-[2px] bg-neutral-950 border-[#946f6f] border-solid buttonShadow duration-200" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
