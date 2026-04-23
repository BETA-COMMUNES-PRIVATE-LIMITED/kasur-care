const Button = ({ children, onClick, type = "primary" }) => {
  const baseStyle =
    "px-4 py-2 rounded-full font-medium transition duration-300 cursor-pointer ";

  const variants = {
    primary: "bg-linear-to-r from-blue-500 to-cyan-400 text-center mr-4 text-white hover:bg-blue-600 text-lg font-medium tracking-wider",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[type]}`}
    >
      {children}
    </button>
  );
};
export default Button;