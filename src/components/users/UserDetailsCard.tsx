import Link from 'next/link';
import { User } from '@/types/user';

export default function UserDetailsCard({ user }: { user: User }) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm mb-8">
      <Link href="/users" className="text-blue-600 underline mb-4 block">
        ← Back to list
      </Link>

      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>

      <div className="mt-4">
        <h2 className="font-semibold">Company</h2>
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