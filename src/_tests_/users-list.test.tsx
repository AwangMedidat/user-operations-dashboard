import { render, screen } from '@testing-library/react';
import UsersTable from '@/components/users/UsersTable';

describe('UsersTable', () => {
  it('renders users list', () => {
    render(
      <UsersTable
        users={[]}
        initialSearch=""
        initialSort="name"
      />,
    );

    expect(screen.getByText(/No users found/i)).toBeInTheDocument();
  });
});