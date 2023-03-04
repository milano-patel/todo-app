import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Categories from './components/Categories';
import ThemePicker from './components/ThemePicker';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [category, setCategory] = useState('all');

  const handleAddTask = (task) => {
    setTasks([
      { taskId: uuidv4(), taskDesc: task, taskComplete: false },
      ...tasks,
    ]);
    setCategory('all');
  };

  const handleRemoveTask = (id) => {
    let remainingTask = tasks.filter((t) => t.taskId !== id);
    setTasks(remainingTask);
  };

  const handleCompleTask = (id, index) => {
    let completeTask = tasks.filter((t) => t.taskId === id);
    completeTask[0].taskComplete = true;
    let compTask = tasks.splice(index, 1);
    tasks.push(compTask[0]);
    setTasks([...tasks]);
  };

  const handleSetCategory = (cat) => {
    setCategory(cat);
  };

  useEffect(() => {
    console.log(category);
    if (category === 'all') {
      setTasks(tasks);
    }
    if (category === 'remaining') {
      let remainTasks = tasks.filter((t) => t.taskComplete === false);
      setFilteredTasks(remainTasks);
    }
    if (category === 'completed') {
      let completeTasks = tasks.filter((t) => t.taskComplete === true);
      setFilteredTasks(completeTasks);
    }
  }, [category, tasks]);

  return (
    <div className="root-container">
      <h1>| To Do List App |</h1>
      <ThemePicker />
      <div className="container">
        <TaskForm addTask={handleAddTask} />
        <Categories category={category} setCategory={handleSetCategory} />
        <TaskList
          tasks={category === 'all' ? tasks : filteredTasks}
          removeTask={handleRemoveTask}
          completeTask={handleCompleTask}
          setTasks={setTasks}
        />
      </div>
    </div>
  );
}

export default App;
