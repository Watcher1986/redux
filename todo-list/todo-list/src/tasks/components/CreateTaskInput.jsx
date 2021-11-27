import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateTaskInput = ({ onCreate }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleTaskCreate = () => {
    onCreate(value);
    setValue('');
  };

  return (
    <div className="create-task">
      <input type="text" value={value} onChange={handleChange} className="create-task__input" />
      <button className="btn create-task__btn" onClick={handleTaskCreate}>
        Create
      </button>
    </div>
  );
};

export default CreateTaskInput;

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

// 1. Take text from input
// 2. Create task with this text
// 3. Add created task to the list
