import { generateMetadata } from '@/app/users/[id]/page';
import { getUserById } from '@/lib/api';

jest.mock('@/lib/api', () => ({
  getUserById: jest.fn(),
}));

describe('generateMetadata', () => {
  it('returns valid metadata', async () => {
    (getUserById as jest.Mock).mockResolvedValue({
      name: 'Awang Medidat',
      username: 'awangdev',
      email: 'awang@mail.com',
      company: { name: 'Tech Corp' },
    });

    const metadata = await generateMetadata({
      params: Promise.resolve({ id: '1' }),
    });

    expect(metadata.title).toContain('Awang Medidat');
  });

  it('returns fallback metadata', async () => {
    (getUserById as jest.Mock).mockRejectedValue(
      new Error('User not found'),
    );

    const metadata = await generateMetadata({
      params: Promise.resolve({ id: '999' }),
    });

    expect(metadata.title).toBe('User Not Found');
  });
});