import Link from 'next/link';
import { UserWithStats } from '@/types/user';

export default function UserCardMobile({ user }: { user: UserWithStats }) {
  return (
    <Link
      href={`/users/${user.id}`}
      className="block border rounded-2xl p-4 shadow-sm hover:shadow-md"
    >
      <h3 className="font-semibold text-lg">{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <div className="mt-2 text-sm text-gray-600">
        <p>Posts: {user.totalPosts}</p>
        <p>Completed: {user.completedTodos}</p>
        <p>Pending: {user.pendingTodos}</p>
      </div>
    </Link>
  );
}