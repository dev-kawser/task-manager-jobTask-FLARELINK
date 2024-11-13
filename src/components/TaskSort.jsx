/* eslint-disable react/prop-types */
const TaskSort = ({ onSort }) => {
    return (
        <select
            onChange={(e) => onSort(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
        >
            <option value="">Sort by...</option>
            <option value="title">Title</option>
            <option value="completed">Completion</option>
            <option value="priority">Priority</option>
        </select>
    );
};

export default TaskSort;
