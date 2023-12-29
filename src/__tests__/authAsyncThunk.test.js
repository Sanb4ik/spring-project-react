import { createUser } from '../store/authSlice';

global.fetch = jest.fn();

describe('auth tests for async thunk', () => {
  it('success create user with resolve response', async () => {
    const mockUser = { userName: 'admin', password: '1234' };
    fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockUser) });
    const dispatch = jest.fn();
    const thunk = createUser(mockUser);
    await thunk(dispatch, () => ({}));
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    const [start, end] = calls;
    expect(start[0].type).toBe('auth/createUser/pending');
    expect(end[0].type).toBe('auth/createUser/fulfilled');
    expect(end[0].payload).toBe(mockUser);
  });

  it('failed create user with rejected response', async () => {
    const mockUser = { userName: 'adminn', password: '1234' };
    fetch.mockResolvedValue({ ok: false });
    const dispatch = jest.fn();
    const thunk = createUser(mockUser);
    await thunk(dispatch, () => ({}));
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    const [start, end] = calls;
    expect(start[0].type).toBe('auth/createUser/pending');
    expect(end[0].type).toBe('auth/createUser/rejected');
    expect(end[0].error.message).toBe('Failed to create usder');
  });
});
