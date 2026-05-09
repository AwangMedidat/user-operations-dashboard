'use client';

export default function ErrorDetails({ error }: { error: Error }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-red-600 text-xl font-semibold">
        Failed to load user details
      </h2>
      <p>{error.message}</p>
    </div>
  );
}