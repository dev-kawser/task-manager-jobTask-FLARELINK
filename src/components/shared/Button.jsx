/* eslint-disable react/prop-types */
const Button = ({ onClick, title, className }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-3 rounded-md transition font-medium ${className}`}
        >
            {title}
        </button>
    );
};

export default Button;
