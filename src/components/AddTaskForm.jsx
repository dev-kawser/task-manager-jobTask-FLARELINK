import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Button from './shared/Button';
import TaskList from './TaskList';
import TaskSearch from './TaskSearch';
import TaskSort from './TaskSort';

const AddTaskForm = () => {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        if (!task.trim()) {
            toast.error('Task title cannot be empty');
            return;
        }

        const newTask = {
            id: Date.now(),
            title: task.trim(),
            completed: false,
            priority,
        };

        setTasks([...tasks, newTask]);
        setTask('');
        setPriority('Medium');
        toast.success('Task Added Successfully');
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
        toast.success('Task Deleted Successfully');
    };

    const handleToggleCompletion = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const filteredTasks = tasks
        .filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortOption === 'title') {
                return a.title.localeCompare(b.title);
            }
            if (sortOption === 'completed') {
                return b.completed - a.completed;
            }
            if (sortOption === 'priority') {
                const priorities = { High: 1, Medium: 2, Low: 3 };
                return priorities[a.priority] - priorities[b.priority];
            }
            return 0;
        });

    return (
        <div className="container mx-auto flex flex-col lg:flex-row gap-6 mt-10">
            <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Task</h2>
                <TaskSearch onSearch={setSearchTerm} />
                <TaskSort onSort={setSortOption} />
                <div className="mt-4">
                    <input
                        type="text"
                        className="w-full p-3 border rounded-lg mb-4"
                        placeholder="Enter task title"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full p-3 border rounded-lg mb-4"
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <Button
                        title="Add Task"
                        onClick={handleAddTask}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    />
                </div>
            </div>
            <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Task List</h2>
                <TaskList
                    tasks={filteredTasks}
                    onDeleteTask={handleDeleteTask}
                    onToggleCompletion={handleToggleCompletion}
                />
            </div>
        </div>
    );
};

export default AddTaskForm;
