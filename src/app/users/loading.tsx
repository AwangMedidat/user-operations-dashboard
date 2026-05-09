export default function LoadingUsersPage() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-14 bg-gray-200 rounded-3xl w-full" />
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="h-20 bg-gray-100 rounded-3xl border"
        />
      ))}
    </div>
  );
}