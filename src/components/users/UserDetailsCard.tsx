import Link from 'next/link';
import { User } from '@/types/user';

export default function UserDetailsCard({ user }: { user: User }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
      <Link href="/users" className="text-blue-600 hover:underline mb-6 inline-block focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
        ← Back to list
      </Link>

      <h1 className="text-4xl font-bold tracking-tight mb-6">{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold mt-6 mb-2">Company</h2>
        <p>{user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
      </div>

      <div className="mt-4">
        <h2 className="font-semibold">Address</h2>
        <p>
          {user.address.street}, {user.address.suite}, {user.address.city},{' '}
          {user.address.zipcode}
        </p>
      </div>
    </div>
  );
}