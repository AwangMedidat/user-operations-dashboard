'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold text-red-600 mb-2">
        Failed to load users
      </h2>
      <p>{error.message}</p>
    </div>
  );
}