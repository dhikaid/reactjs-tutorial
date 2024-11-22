const Button = (props) => {
  // warna default
  const { children = "Ini Button", classname = "bg-black" } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
