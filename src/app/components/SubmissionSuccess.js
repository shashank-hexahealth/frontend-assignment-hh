export default function SubmissionSuccess() {
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <svg
        className="w-10 h-10 text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-green-500 text-xl">
        Form Submitted Successfully!
      </span>
    </div>
  );
}
