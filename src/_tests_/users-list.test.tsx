import UsersTable from '@/components/users/UsersTable';
import { render, screen, fireEvent } from '@testing-library/react';

const mockUsers = [
  {
    id: 1,
    name: 'Awang Medidat',
    username: 'awangdev',
    email: 'awang@mail.com',
    phone: '08123456789',
    website: 'awang.dev',
    address: {
      street: 'Main Street',
      suite: 'Apt 1',
      city: 'Jakarta',
      zipcode: '12345',
    },
    company: {
      name: 'Tech Corp',
      catchPhrase: 'Building scalable apps',
    },
    totalPosts: 5,
    completedTodos: 3,
    pendingTodos: 2,
  },
  {
    id: 2,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@mail.com',
    phone: '08987654321',
    website: 'john.dev',
    address: {
      street: 'Second Street',
      suite: 'Apt 2',
      city: 'Bandung',
      zipcode: '54321',
    },
    company: {
      name: 'Dev Corp',
      catchPhrase: 'Fast solutions',
    },
    totalPosts: 2,
    completedTodos: 0,
    pendingTodos: 4,
  },
];

describe('UsersTable', () => {
  it('renders users with activity signals', () => {
    render(
      <UsersTable
        users={mockUsers}
        initialSearch=""
        initialSort="name"
      />,
    );

    expect(
      screen.getAllByText('Awang Medidat').length,
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText('5').length,
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText('3').length,
    ).toBeGreaterThan(0);
  });

  it('filters users by search', () => {
    render(
      <UsersTable
        users={mockUsers}
        initialSearch=""
        initialSort="name"
      />,
    );

    const searchInput = screen.getByPlaceholderText(
      /search by name or email/i,
    );

    fireEvent.change(searchInput, {
      target: { value: 'Awang' },
    });

    expect(
      screen.getAllByText('Awang Medidat').length,
    ).toBeGreaterThan(0);

    expect(
      screen.queryByText('John Doe'),
    ).not.toBeInTheDocument();
  });

  it('sorts users by pending todos', () => {
    render(
      <UsersTable
        users={mockUsers}
        initialSearch=""
        initialSort="pending"
      />,
    );

    const rows = screen.getAllByRole('row');

    expect(rows[1]).toHaveTextContent('John Doe');
  });

  it('shows empty state', () => {
    render(
      <UsersTable
        users={[]}
        initialSearch=""
        initialSort="name"
      />,
    );

    expect(
      screen.getByText(/No users found/i),
    ).toBeInTheDocument();
  });
});