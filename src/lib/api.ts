import { Post, Todo, User } from '@/types/user';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function fetcher<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
}

export const getUsers = () => fetcher<User[]>('/users');
export const getUserById = (id: string) => fetcher<User>(`/users/${id}`);
export const getPosts = () => fetcher<Post[]>('/posts');
export const getTodos = () => fetcher<Todo[]>('/todos');
export const getPostsByUser = async (userId: number) => {
  const posts = await getPosts();
  return posts.filter((post) => post.userId === userId);
};

export const getTodosByUser = async (userId: number) => {
  const todos = await getTodos();
  return todos.filter((todo) => todo.userId === userId);
};