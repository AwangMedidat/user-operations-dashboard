import { Post, Todo } from '@/types/user';

interface Props {
  posts: Post[];
  todos: Todo[];
}

export default function UserPostsTodos({ posts, todos }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-10">
      <section className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6 tracking-tight">
          Posts
        </h2>

        {posts.length === 0 ? (
          <p className="text-gray-500">
            No posts available.
          </p>
        ) : (
          <div className="space-y-4">
            {posts.slice(0, 5).map((post) => (
              <div
                key={post.id}
                className="border border-gray-100 rounded-2xl p-4 bg-gray-50"
              >
                <h3 className="font-semibold text-gray-900 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6 tracking-tight">
          Todos
        </h2>

        {todos.length === 0 ? (
          <p className="text-gray-500">
            No todos available.
          </p>
        ) : (
          <div className="space-y-3">
            {todos.slice(0, 10).map((todo) => (
              <div
                key={todo.id}
                className="flex items-start gap-3 rounded-2xl border border-gray-100 p-3 bg-gray-50"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  readOnly
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                />

                <span
                  className={`text-sm ${
                    todo.completed
                      ? 'text-green-700 line-through'
                      : 'text-gray-700'
                  }`}
                >
                  {todo.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}