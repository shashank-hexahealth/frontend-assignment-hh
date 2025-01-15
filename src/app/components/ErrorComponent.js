export default function ErrorComponent({showError, closeLabel}) {
  return (
    <div
      className={`${
        showError ? "hidden" : "flex"
      } bg-pink-100 justify-center items-center mb-4 relative p-2`}
    >
      <button
        className="absolute top-0 right-0 font-medium text-gray-500 hover:text-gray-700 pr-2"
        onClick={() => closeLabel(true)}
      >
        x
      </button>
      <p className="text-pink-950">Something went wrong</p>
    </div>
  );
}
