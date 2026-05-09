export default function LoadingUsersPage() {
  return (
    <div className="p-6 animate-pulse">
      <div className="h-8 w-64 bg-gray-200 rounded mb-6" />
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-100 rounded-xl" />
        ))}
      </div>
    </div>
  );
}