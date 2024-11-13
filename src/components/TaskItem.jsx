import Button from "./shared/Button";

/* eslint-disable react/prop-types */
const TaskItem = ({ task, onDeleteTask, onToggleCompletion }) => {
    return (
        <li
            className={`flex justify-between items-center bg-gray-100 p-3 mb-3 rounded-lg shadow-sm ${task?.completed ? 'line-through text-gray-500' : ''
                }`}
        >
            <div>
                <input
                    type="checkbox"
                    checked={task?.completed}
                    onChange={() => onToggleCompletion(task.id)}
                    className="mr-2"
                />
                <span>{task?.title} - {task?.priority || "None"}</span>
            </div>
            <Button
                title="Delete"
                onClick={() => onDeleteTask(task?.id)}
                className="bg-red-500 hover:bg-red-700 text-white"
            />
        </li>
    );
};

export default TaskItem;
