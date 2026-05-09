'use client';

interface Props {
  search: string;
  sort: string;
  onSearch: (value: string) => void;
  onSort: (value: string) => void;
}

export default function UserFilters({
  search,
  sort,
  onSearch,
  onSort,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-3xl shadow-sm border border-gray-200">
  <input
    type="text"
    placeholder="Search by name or email"
    value={search}
    onChange={(e) => onSearch(e.target.value)}
    aria-label="Search users"
    className="flex-1 rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <select
    value={sort}
    onChange={(e) => onSort(e.target.value)}
    aria-label="Sort users"
    className="rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="name">Sort by Name</option>
    <option value="pending">Most Pending Todos</option>
  </select>
</div>
  );
}