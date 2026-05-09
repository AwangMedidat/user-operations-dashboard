'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold text-red-600 mb-2">
        Failed to load users
      </h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 rounded-xl bg-black text-white"
      >
        Retry
      </button>
    </div>
  );
}