import { useState } from 'react';
import toast from 'react-hot-toast';

const AddTaskForm = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (task === '') {
            toast.error('Task title cannot be empty');
            return;
        };

        const newTask = { id: Date.now(), title: task, completed: false };
        setTasks([...tasks, newTask]);
        setTask('');
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };


    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Task</h2>

            <div className="flex items-center gap-3">
                <input
                    type="text"
                    className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter task title"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button
                    onClick={handleAddTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Add Task
                </button>
            </div>

            <ul className="mt-6">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="flex justify-between items-center bg-gray-100 p-3 mb-3 rounded-lg shadow-sm"
                    >
                        <span className="text-gray-800">{task.title}</span>
                        <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddTaskForm;
