import { getPosts, getTodos, getUsers } from '@/lib/api';
import { enrichUsers } from '@/lib/user-utils';
import UsersTable from '@/components/users/UsersTable';

interface UsersPageProps {
  searchParams: Promise<{
    search?: string;
    sort?: string;
  }>;
}

export default async function UsersPage({ searchParams }: UsersPageProps) {
  const params = await searchParams;

  const [users, posts, todos] = await Promise.all([
    getUsers(),
    getPosts(),
    getTodos(),
  ]);

  const enrichedUsers = enrichUsers(users, posts, todos);

  return (
    <main className="min-h-screen p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Users Operations Dashboard</h1>
      <UsersTable
        users={enrichedUsers}
        initialSearch={params.search || ''}
        initialSort={params.sort || 'name'}
      />
    </main>
  );
}