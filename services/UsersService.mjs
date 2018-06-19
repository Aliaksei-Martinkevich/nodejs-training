export default class UsersService {
  static convertUserToResponseObject(user) {
    return {
      username: user.username,
      email: user.email,
      id: user.id,
    };
  }
}
