import TaskItem from "./TaskItem";

/* eslint-disable react/prop-types */
const TaskList = ({ tasks, onDeleteTask, onToggleCompletion }) => {
    return (
      <ul className="mt-6 overflow-y-auto max-h-[400px]">
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
  