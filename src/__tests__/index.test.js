import { createUserRequest } from '../store/authSlice';

jest.mock('../store/authSlice', () => ({
  ...jest.requireActual('../store/authSlice'),
  createUserRequest: jest.fn(),
}));

describe('auth tests', () => {
  it('login test success', async () => {
    await createUserRequest({ userName: 'admin', password: '1234' });
    expect(createUserRequest).toHaveBeenCalled();
    expect(createUserRequest).toHaveBeenCalledWith({ userName: 'admin', password: '1234' });
  });

  it('login test failed', async () => {
    createUserRequest.mockRejectedValue(new Error('Unauthorized'));
    try {
      await createUserRequest({ userName: 'adminnn', password: '1234' });
    } catch (error) {
      expect(error.message).toBe('Unauthorized');
    }
  });
});
