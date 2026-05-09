import { Post, Todo } from '@/types/user';

interface Props {
  posts: Post[];
  todos: Todo[];
}

export default function UserPostsTodos({ posts, todos }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Posts</h2>
        <div className="space-y-4">
          {posts.slice(0, 5).map((post) => (
            <div key={post.id} className="border rounded-xl p-4">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Todos</h2>
        <div className="space-y-3">
          {todos.slice(0, 10).map((todo) => (
            <div key={todo.id} className="flex items-center gap-2">
              <input type="checkbox" checked={todo.completed} readOnly />
              <span>{todo.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}