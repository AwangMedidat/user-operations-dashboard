import { render, screen } from '@testing-library/react';
import UserPostsTodos from '@/components/users/UserPostsTodos';
import UserDetailsCard from '@/components/users/UserDetailsCard';

const mockUser = {
  id: 1,
  name: 'Awang Medidat',
  username: 'awangdev',
  email: 'awang@mail.com',
  phone: '08123456789',
  website: 'awang.dev',
  company: {
    name: 'Tech Corp',
    catchPhrase: 'Building scalable apps',
  },
  address: {
    street: 'Main Street',
    suite: 'Apt 1',
    city: 'Jakarta',
    zipcode: '12345',
  },
};

const mockPosts = [
  {
    userId: 1,
    id: 1,
    title: 'First Post',
    body: 'Post content',
  },
];

const mockTodos = [
  {
    userId: 1,
    id: 1,
    title: 'Complete project',
    completed: false,
  },
];

describe('UserDetails', () => {
  it('renders user details', () => {
    render(<UserDetailsCard user={mockUser} />);

    expect(screen.getByText('Awang Medidat')).toBeInTheDocument();
    expect(screen.getByText('Tech Corp')).toBeInTheDocument();

    expect(
      screen.getByText((content) =>
        content.includes('Jakarta'),
      ),
    ).toBeInTheDocument();
  });

  it('renders posts and todos', () => {
    render(
      <UserPostsTodos posts={mockPosts} todos={mockTodos} />,
    );

    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(
      screen.getByText('Complete project'),
    ).toBeInTheDocument();
  });

  it('handles empty posts/todos gracefully', () => {
    render(<UserPostsTodos posts={[]} todos={[]} />);

    expect(
      screen.getByText('Posts'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Todos'),
    ).toBeInTheDocument();
  });
});