'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { UserWithStats } from '@/types/user';
import { filterUsers, sortUsers } from '@/lib/user-utils';
import UserFilters from './UserFilters';
import UserCardMobile from './UserCardMobile';

interface Props {
  users: UserWithStats[];
  initialSearch: string;
  initialSort: string;
}

export default function UsersTable({
  users,
  initialSearch,
  initialSort,
}: Props) {
  const [search, setSearch] = useState(initialSearch);
  const [sort, setSort] = useState(initialSort);

  const filteredUsers = useMemo(() => {
    const searched = filterUsers(users, search);
    return sortUsers(searched, sort);
  }, [users, search, sort]);

  return (
    <>
      <UserFilters
        search={search}
        sort={sort}
        onSearch={setSearch}
        onSort={setSort}
      />

      {filteredUsers.length === 0 ? (
        <p className="text-center py-8">No users found.</p>
      ) : (
        <>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Posts</th>
                  <th>Completed</th>
                  <th>Pending</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td>
                      <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>{user.totalPosts}</td>
                    <td>{user.completedTodos}</td>
                    <td>{user.pendingTodos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 md:hidden">
            {filteredUsers.map((user) => (
              <UserCardMobile key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </>
  );
}