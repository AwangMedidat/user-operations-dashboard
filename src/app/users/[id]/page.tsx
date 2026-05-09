import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import {
  getUserById,
  getPostsByUser,
  getTodosByUser,
} from '@/lib/api';
import UserDetailsCard from '@/components/users/UserDetailsCard';
import UserPostsTodos from '@/components/users/UserPostsTodos';
import LoadingUserDetails from './loading';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;

  try {
    const user = await getUserById(id);

    return {
      title: `${user.name} | User Details`,
      description: `View profile details, company information, address, posts, and todos for ${user.name}.`,
    };
  } catch {
    return {
      title: 'User Not Found',
      description: 'Requested user details could not be found.',
    };
  }
}

async function UserDetailsContent({ id }: { id: string }) {
  const user = await getUserById(id);

  if (!user?.id) return notFound();

  const [posts, todos] = await Promise.all([
    getPostsByUser(user.id),
    getTodosByUser(user.id),
  ]);

  return (
    <>
      <UserDetailsCard user={user} />
      <UserPostsTodos posts={posts} todos={todos} />
    </>
  );
}

export default async function UserDetailsPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="max-w-5xl mx-auto p-6">
      <Suspense fallback={<LoadingUserDetails />}>
        <UserDetailsContent id={id} />
      </Suspense>
    </main>
  );
}