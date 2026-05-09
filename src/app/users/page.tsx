import { Suspense } from 'react';
import { getPosts, getTodos, getUsers } from '@/lib/api';
import { enrichUsers } from '@/lib/user-utils';
import UsersTable from '@/components/users/UsersTable';
import LoadingUsersPage from './loading';

interface UsersPageProps {
  searchParams: Promise<{
    search?: string;
    sort?: string;
  }>;
}

async function UsersContent({ searchParams }: UsersPageProps) {
  const params = await searchParams;

  const [users, posts, todos] = await Promise.all([
    getUsers(),
    getPosts(),
    getTodos(),
  ]);

  const enrichedUsers = enrichUsers(users, posts, todos);

  return (
    <UsersTable
      users={enrichedUsers}
      initialSearch={params.search || ''}
      initialSort={params.sort || 'name'}
    />
  );
}

export default function UsersPage({ searchParams }: UsersPageProps) {
  return (
    <main className="min-h-screen p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Users Operations Dashboard</h1>

      <Suspense fallback={<LoadingUsersPage />}>
        <UsersContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}