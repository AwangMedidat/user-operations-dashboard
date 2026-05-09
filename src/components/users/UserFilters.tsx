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
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search by name or email"
        className="border rounded-xl px-4 py-2 w-full"
      />

      <select
        value={sort}
        onChange={(e) => onSort(e.target.value)}
        className="border rounded-xl px-4 py-2"
      >
        <option value="name">Sort by Name</option>
        <option value="pending">Most Pending Todos</option>
      </select>
    </div>
  );
}