'use client';

export default function ErrorDetails({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-red-600 text-xl font-semibold mb-3">
        Failed to load user details
      </h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 rounded-xl bg-black text-white"
      >
        Try Again
      </button>
    </div>
  );
}