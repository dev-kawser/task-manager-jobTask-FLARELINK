/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDeleteTask, onToggleCompletion }) => {

    return (
        <ul className="overflow-y-auto max-h-[400px]">
            {tasks?.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDeleteTask={onDeleteTask}
                    onToggleCompletion={onToggleCompletion}
                />
            ))}
        </ul>
    );
};

export default TaskList;
