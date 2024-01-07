import { createUser } from '../store/userSlice';

// eslint-disable-next-line no-undef
global.fetch = jest.fn();

describe('auth tests for async thunk', () => {
  it('success create user with resolve response', async () => {
    const mockUser = { userName: 'admin', password: '1234' };
    fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockUser) });

    const dispatch = jest.fn();
    const thunk = createUser(mockUser);
    await thunk(dispatch, () => ({}));

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(calls).toHaveLength(2);
    expect(start[0].type).toBe('user/createUser/pending');
    expect(end[0].type).toBe('user/createUser/fulfilled');
  });

  it('failed create user with rejected response', async () => {
    const mockUser = { userName: 'adminn', password: '1234' };
    fetch.mockResolvedValue({ ok: false });

    const dispatch = jest.fn();
    const thunk = createUser(mockUser);

    await thunk(dispatch, () => ({}));
    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(calls).toHaveLength(2);
    expect(start[0].type).toBe('user/createUser/pending');
    expect(end[0].type).toBe('user/createUser/rejected');
  });
});
