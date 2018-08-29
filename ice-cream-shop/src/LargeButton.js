import React from 'react';

const LargeButton = ({id, text, onClick}) => {
    return (
      <div id={id} onClick={onClick}>
          {text}
      </div>
    );
  }

export default LargeButton;