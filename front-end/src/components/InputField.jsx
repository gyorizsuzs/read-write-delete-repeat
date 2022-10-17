import React from 'react';

function InputField({ text, setUpdate, update, id }) {
  const deleting = () => {
    fetch(`http://localhost:6789/tasks/${id}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(setUpdate(update === true ? false : true));
  };

  return (
    <div>
      <p>{text}</p>
      <button
        onClick={() => {
          deleting();
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default InputField;
