import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Button from './shared/Button';

const AddTaskForm = () => {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // Get Tasks From Local Storage
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);


    // Add Task On Local Storage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Add Task On Form Submission
    const handleAddTask = () => {
        if (task === '') {
            toast.error('Task title cannot be empty');
            return;
        }

        const newTask = { id: Date.now(), title: task, completed: false };
        setTasks([...tasks, newTask]);
        setTask('');
        toast.success('Task Added Successfully');
    };

    // Delete Task
    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        toast.success('Task Deleted Successfully');
    };

    return (
        <div className="max-w-xl mx-2 md:mx-auto lg:mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Task</h2>

            <div className="flex items-center gap-3">
                <input
                    type="text"
                    className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter task title"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <Button
                    title="Add"
                    onClick={handleAddTask}
                    className="bg-blue-500 text-white hover:bg-blue-600"
                />
            </div>

            <ul className="mt-6 overflow-y-auto max-h-[400px]">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="flex justify-between items-center bg-gray-100 p-3 mb-3 rounded-lg shadow-sm"
                    >
                        <span className="text-gray-800">{task.title}</span>
                        <Button
                            title="Delete"
                            onClick={() => handleDeleteTask(task.id)}
                            className="bg-red-500 hover:bg-red-700 text-white"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddTaskForm;
