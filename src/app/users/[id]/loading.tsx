export default function LoadingUserDetails() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white animate-pulse">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
        {/* Header Skeleton */}
        <div className="mb-12">
          <div className="h-5 w-40 bg-gray-200 rounded mb-6" />
          <div className="h-14 w-2/3 bg-gray-300 rounded-xl mb-4" />
          <div className="h-5 w-1/2 bg-gray-200 rounded" />
        </div>

        {/* Main Detail Card */}
        <div className="w-full bg-white rounded-3xl border border-gray-200 shadow-lg p-8 md:p-12">
          {/* Back link */}
          <div className="h-5 w-36 bg-gray-200 rounded mb-10" />

          {/* User Name */}
          <div className="h-16 w-3/4 bg-gray-300 rounded-2xl mb-10" />

          {/* User Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <div className="h-5 w-4/5 bg-gray-200 rounded" />
              <div className="h-5 w-3/4 bg-gray-200 rounded" />
              <div className="h-5 w-2/3 bg-gray-200 rounded" />
              <div className="h-5 w-3/5 bg-gray-200 rounded" />
            </div>

            <div className="space-y-5">
              <div className="h-5 w-3/4 bg-gray-200 rounded" />
              <div className="h-5 w-2/3 bg-gray-200 rounded" />
              <div className="h-5 w-4/5 bg-gray-200 rounded" />
              <div className="h-5 w-3/5 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Company Section */}
          <div className="mt-12">
            <div className="h-8 w-48 bg-gray-300 rounded-xl mb-5" />
            <div className="space-y-4">
              <div className="h-5 w-1/2 bg-gray-200 rounded" />
              <div className="h-5 w-3/4 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Address Section */}
          <div className="mt-12">
            <div className="h-8 w-36 bg-gray-300 rounded-xl mb-5" />
            <div className="h-5 w-5/6 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Posts + Todos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Posts Skeleton */}
          <section className="rounded-3xl border border-gray-200 bg-white shadow-lg p-8">
            <div className="h-9 w-32 bg-gray-300 rounded-xl mb-8" />

            <div className="space-y-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 p-5 bg-gray-50"
                >
                  <div className="h-5 w-3/4 bg-gray-200 rounded mb-4" />
                  <div className="h-4 w-full bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </section>

          {/* Todos Skeleton */}
          <section className="rounded-3xl border border-gray-200 bg-white shadow-lg p-8">
            <div className="h-9 w-32 bg-gray-300 rounded-xl mb-8" />

            <div className="space-y-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 bg-gray-50"
                >
                  <div className="h-5 w-5 bg-gray-300 rounded" />
                  <div className="h-4 flex-1 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}