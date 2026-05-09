import { Todo, Post, User, UserWithStats } from '@/types/user';

export function enrichUsers(
  users: User[],
  posts: Post[],
  todos: Todo[],
): UserWithStats[] {
  return users.map((user) => {
    const userPosts = posts.filter((post) => post.userId === user.id);
    const userTodos = todos.filter((todo) => todo.userId === user.id);

    return {
      ...user,
      totalPosts: userPosts.length,
      completedTodos: userTodos.filter((todo) => todo.completed).length,
      pendingTodos: userTodos.filter((todo) => !todo.completed).length,
    };
  });
}

export function filterUsers(users: UserWithStats[], search: string) {
  const keyword = search.toLowerCase();

  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword),
  );
}

export function sortUsers(users: UserWithStats[], sortBy: string) {
  switch (sortBy) {
    case 'pending':
      return [...users].sort((a, b) => b.pendingTodos - a.pendingTodos);
    case 'name':
    default:
      return [...users].sort((a, b) => a.name.localeCompare(b.name));
  }
}