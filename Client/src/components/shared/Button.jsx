const Button = ({ children, onClick, type = "primary" }) => {
  const baseStyle =
    "px-4 py-1 rounded-full font-medium transition duration-300 cursor-pointer  text-sm mb-4 ";

  const variants = {
    primary: "bg-linear-to-r from-blue-500 to-cyan-400 text-center mr-4 text-white hover:bg-blue-600 text-lg font-medium tracking-wider",
    secondary: "bg-black text-white hover:bg-gray-300 px-4 py-1 text-lg font-semibold",
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