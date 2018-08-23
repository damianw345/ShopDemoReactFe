import React from 'react';

const LargeButton = ({id, text, handleClick}) => {
    return (
      <div id={id} onClick={handleClick}>
          {text}
      </div>
    );
  }

export default LargeButton;