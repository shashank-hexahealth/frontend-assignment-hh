export default function DefaultButton({
  className = "",
  label,
  clickHandler = () => {},
  type = "button",
}) {
  return (
    <button
      className={`bg-cyan-300 hover:bg-cyan-400 rounded-lg px-5 py-2.5 text-center ${className}`}
      onClick={clickHandler}
      type={type}
    >
      {label}
    </button>
  );
}
