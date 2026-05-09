import Link from 'next/link';
import { UserWithStats } from '@/types/user';

export default function UserCardMobile({ user }: { user: UserWithStats }) {
  return (
    <Link
  href={`/users/${user.id}`}
  className="block rounded-3xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
>
  <h3 className="font-semibold text-lg text-gray-900">
    {user.name}
  </h3>

  <p className="text-gray-600 mt-1">{user.email}</p>
  <p className="text-gray-500 text-sm">{user.website}</p>

  <div className="grid grid-cols-3 gap-3 mt-4 text-sm">
    <div className="rounded-2xl bg-gray-50 p-3 text-center">
      <p className="font-semibold">{user.totalPosts}</p>
      <p className="text-gray-500">Posts</p>
    </div>

    <div className="rounded-2xl bg-green-50 p-3 text-center">
      <p className="font-semibold text-green-700">
        {user.completedTodos}
      </p>
      <p className="text-gray-500">Done</p>
    </div>

    <div className="rounded-2xl bg-orange-50 p-3 text-center">
      <p className="font-semibold text-orange-600">
        {user.pendingTodos}
      </p>
      <p className="text-gray-500">Pending</p>
    </div>
  </div>
</Link>
  );
}