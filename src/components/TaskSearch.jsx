/* eslint-disable react/prop-types */
const TaskSearch = ({ onSearch }) => {
    return (
        <div className="relative mt-4">
            <input
                type="text"
                placeholder="Search tasks..."
                onChange={(e) => onSearch(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-3 text-gray-500">🔍</span>
        </div>
    );
};

export default TaskSearch;
