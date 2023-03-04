import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskEl from './TaskEl';

const TaskList = ({ tasks, setTasks, removeTask, completeTask }) => {
  console.log(tasks);
  // a little function to help us with reordering the result
  const reorderTasks = (tasks, startIndex, endIndex) => {
    console.log(startIndex, endIndex);
    const result = [...tasks];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleOnDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorderTasks(
      tasks,
      result.source.index,
      result.destination.index
    );

    setTasks(items);
  };

  const renderedList = tasks.map((task, index) => {
    return (
      <Draggable key={task.taskId} draggableId={task.taskId} index={index}>
        {(provided) => (
          <div
            className="task-element"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <TaskEl
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              removeTask={removeTask}
              completeTask={completeTask}
              index={index}
            />
          </div>
        )}
      </Draggable>
    );
  });

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <ul className="task-list">{renderedList}</ul>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;

/* <li draggable>
  <div className="task-element">Task karo</div>
  </li>


  
  */

/* {editMode ? (
          <input
            type="text"
            placeholder="Edit task here..."
            value={task}
          ></input>
        ) : (
          <li>{task}</li>
        )} */
