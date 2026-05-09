import { Suspense } from 'react';
import { getPosts, getTodos, getUsers } from '@/lib/api';
import { enrichUsers } from '@/lib/user-utils';
import UsersTable from '@/components/users/UsersTable';
import LoadingUsersPage from './loading';
import Pagination from '@/components/users/Pagination';

interface UsersPageProps {
  searchParams: Promise<{
    search?: string;
    sort?: string;
    page?: string;
  }>;
}

const USERS_PER_PAGE = 5;

async function UsersContent({ searchParams }: UsersPageProps) {
  const params = await searchParams;

  const page = Number(params.page) || 1;

  const [users, posts, todos] = await Promise.all([
    getUsers(),
    getPosts(),
    getTodos(),
  ]);

  const enrichedUsers = enrichUsers(users, posts, todos);

  const start = (page - 1) * USERS_PER_PAGE;
  const paginatedUsers = enrichedUsers.slice(
    start,
    start + USERS_PER_PAGE,
  );

  const totalPages = Math.ceil(
    enrichedUsers.length / USERS_PER_PAGE,
  );

  return (
    <>
      <UsersTable
        users={paginatedUsers}
        initialSearch={params.search || ''}
        initialSort={params.sort || 'name'}
      />

      <Pagination totalPages={totalPages} />
    </>
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