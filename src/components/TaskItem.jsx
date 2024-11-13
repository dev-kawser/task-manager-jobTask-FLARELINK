import Button from "./shared/Button";

/* eslint-disable react/prop-types */
const TaskItem = ({ task, onDeleteTask, onToggleCompletion }) => {
    return (
        <li
            className={`flex justify-between items-center p-4 mb-3 rounded-lg shadow-sm transition 
            ${task.completed ? 'bg-gray-200 line-through text-gray-600' : 'bg-white'}`}
        >
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={task?.completed}
                    onChange={() => onToggleCompletion(task?.id)}
                    className="mr-3"
                />
                <span>{task?.title} - {task?.priority}</span>
            </div>
            <Button
                title="Delete"
                onClick={() => onDeleteTask(task?.id)}
                className="bg-red-500 hover:bg-red-600 text-white"
            />
        </li>
    );
};

export default TaskItem;
