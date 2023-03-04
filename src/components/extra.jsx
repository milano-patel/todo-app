// import { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { DragDropContext, Draggable } from 'react-beautiful-dnd';

// const TaskList = ({ tasks, removeTask, editTask }) => {
//   const [editMode, seteditMode] = useState(false);

//   const handleEditMode = () => {
//     seteditMode(!editMode);
//   };

//   const renderedList = tasks.map(({ taskId, taskDesc }, index) => {
//     return (
//       <Draggable key={taskId} draggableId={taskId} index={index}>
//         {(provided) => (
//           <div
//             className="task-element"
//             onClick={handleEditMode}
//             ref={provided.innerRef}
//             {...provided.draggableProps}
//             {...provided.dragHandleProps}
//           >
//             <li>{taskDesc}</li>
//             <span>
//               <FaTimes onClick={() => removeTask(index)} />
//             </span>
//           </div>
//         )}
//       </Draggable>
//     );
//   });

//   return (
//     <div>
//       <DragDropContext>
//         {(provided) => (
//           <ul
//             className="task-list"
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//           >
//             {renderedList}
//           </ul>
//         )}
//       </DragDropContext>
//     </div>
//   );
// };

// export default TaskList;

// /* <li draggable>
//   <div className="task-element">Task karo</div>
//   </li>

//   */

// /* {editMode ? (
//           <input
//             type="text"
//             placeholder="Edit task here..."
//             value={task}
//           ></input>
//         ) : (
//           <li>{task}</li>
//         )} */
