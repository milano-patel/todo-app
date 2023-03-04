import { useState } from 'react';

import { FaTimes, FaBars, FaCheck, FaRegCircle } from 'react-icons/fa';

const TaskEl = ({ task, tasks, setTasks, removeTask, completeTask, index }) => {
  const [editMode, seteditMode] = useState(false);
  const handleEditMode = () => {
    seteditMode(true);
  };

  const handleEditTask = (e) => {
    let editedTask = tasks.filter((t) => t.taskId === task.taskId);
    editedTask[0].taskDesc = e.target.value;
    tasks.splice(index, 1, editedTask[0]);
    setTasks(tasks);
  };

  return (
    <>
      <span className="optBtn" onClick={() => completeTask(task.taskId, index)}>
        {task.taskComplete ? <FaCheck /> : <FaRegCircle />}
      </span>
      <span
        style={{
          textDecoration: task.taskComplete ? 'line-through' : 'none',
        }}
      >
        {editMode && !task.taskComplete ? (
          <input
            type="text"
            placeholder="Edit task here..."
            defaultValue={task.taskDesc}
            onChange={handleEditTask}
          ></input>
        ) : (
          <li onClick={handleEditMode}>{task.taskDesc}</li>
        )}
      </span>
      <span>
        <FaBars />
      </span>

      <span className="optBtn">
        <FaTimes onClick={() => removeTask(task.taskId, index)} />
      </span>
    </>
  );
};

export default TaskEl;
