import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [inputVal, setInputVal] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputVal.trim() !== '') {
      addTask(inputVal);
      setInputVal('');
    }
  };

  const onchangeHandler = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <label htmlFor="todo">
        <h2>Add Task</h2>
      </label>
      <form className="add-task" onSubmit={submitHandler}>
        <input
          type="text"
          id="todo"
          onChange={onchangeHandler}
          value={inputVal}
        ></input>
        <span>
          <FaPlus onClick={submitHandler} />
        </span>
      </form>
    </>
  );
};

export default TaskForm;
