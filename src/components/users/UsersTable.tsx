"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { UserWithStats } from "@/types/user";
import { filterUsers, sortUsers } from "@/lib/user-utils";
import UserFilters from "./UserFilters";
import UserCardMobile from "./UserCardMobile";

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
        <div className="text-center py-16 border rounded-3xl bg-gray-50 shadow-sm mt-7">
          <p className="text-xl font-semibold text-gray-700">No users found</p>
          <p className="text-gray-500 mt-2">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      ) : (
        <>
          <div className="hidden md:block overflow-hidden rounded-3xl border border-gray-200 shadow-md bg-white mt-7">
            <table className="w-full text-sm text-gray-700">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-5 font-semibold tracking-wide">
                    Name
                  </th>
                  <th className="text-left px-6 py-5 font-semibold tracking-wide">
                    Email
                  </th>
                  <th className="text-left px-6 py-5 font-semibold tracking-wide">
                    Website
                  </th>
                  <th className="text-center px-6 py-5 font-semibold tracking-wide">
                    Posts
                  </th>
                  <th className="text-center px-6 py-5 font-semibold tracking-wide">
                    Completed
                  </th>
                  <th className="text-center px-6 py-5 font-semibold tracking-wide">
                    Pending
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`transition-colors hover:bg-blue-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium">
                      <Link
                        href={`/users/${user.id}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                      >
                        {user.name}
                      </Link>
                    </td>

                    <td className="px-6 py-4 text-gray-600 truncate max-w-xs">
                      {user.email}
                    </td>

                    <td className="px-6 py-4 text-gray-600">{user.website}</td>

                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                        {user.totalPosts}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        {user.completedTodos}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                        {user.pendingTodos}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 md:hidden mt-7">
            {filteredUsers.map((user) => (
              <UserCardMobile key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </>
  );
}