import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Button from './shared/Button';
import TaskList from './TaskList';

const AddTaskForm = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!task) {
      toast.error('Task title cannot be empty');
      return;
    }
    const newTask = { id: Date.now(), title: task, completed: false, priority: 'Medium' };
    setTasks([...tasks, newTask]);
    setTask('');
    toast.success('Task Added Successfully');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks?.filter((task) => task.id !== id));
    toast.success('Task Deleted Successfully');
  };



  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Task Manager</h2>


      <div className="flex items-center gap-3 mt-4">
        <input
          type="text"
          className="flex-grow p-3 border rounded-lg"
          placeholder="Enter task title"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button title="Add" onClick={handleAddTask} className="bg-blue-500 text-white" />
      </div>

      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
};

export default AddTaskForm;
