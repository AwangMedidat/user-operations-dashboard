'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface Props {
  totalPages: number;
}

export default function Pagination({ totalPages }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-10 flex-wrap">
      <Link
        href={createPageURL(Math.max(currentPage - 1, 1))}
        className={`px-4 py-2 rounded-2xl border hover:bg-gray-50 transition ${
          currentPage === 1
            ? 'pointer-events-none opacity-50'
            : ''
        }`}
      >
        Previous
      </Link>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (page) => (
          <Link
            key={page}
            href={createPageURL(page)}
            className={`px-4 py-2 rounded-2xl border hover:bg-gray-50 transition ${
              currentPage === page
                ? 'bg-black text-white'
                : ''
            }`}
          >
            {page}
          </Link>
        ),
      )}

      <Link
        href={createPageURL(
          Math.min(currentPage + 1, totalPages),
        )}
        className={`px-4 py-2 rounded-2xl border hover:bg-gray-50 transition ${
          currentPage === totalPages
            ? 'pointer-events-none opacity-50'
            : ''
        }`}
      >
        Next
      </Link>
    </div>
  );
}