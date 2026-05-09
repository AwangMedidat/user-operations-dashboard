import { notFound } from 'next/navigation';
import {
  getUserById,
  getPostsByUser,
  getTodosByUser,
} from '@/lib/api';
import UserDetailsCard from '@/components/users/UserDetailsCard';
import UserPostsTodos from '@/components/users/UserPostsTodos';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;

  return {
    title: `User ${id} Details`,
    description: `Detailed user profile for user ${id}`,
  };
}

export default async function UserDetailsPage({ params }: Props) {
  const { id } = await params;

  try {
    const user = await getUserById(id);

    if (!user?.id) return notFound();

    const [posts, todos] = await Promise.all([
      getPostsByUser(user.id),
      getTodosByUser(user.id),
    ]);

    return (
      <main className="max-w-5xl mx-auto p-6">
        <UserDetailsCard user={user} />
        <UserPostsTodos posts={posts} todos={todos} />
      </main>
    );
  } catch {
    return notFound();
  }
}