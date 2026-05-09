import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          User Operations Dashboard
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          A technical assessment project built with Next.js App Router,
          TypeScript, Tailwind CSS, and Jest.
        </p>

        <Link
          href="/users"
          className="inline-block rounded-2xl bg-black text-white px-8 py-4 font-medium hover:opacity-90 transition"
        >
          View Users Dashboard
        </Link>
      </div>
    </main>
  );
}