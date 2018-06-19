import Store from '../../../Store';
import UsersService from '../../../services/UsersService';
import AuthService from '../../../services/AuthService';


export default async function postAuth(req, res, next) {
  const { username, password } = req.body;
  const user = Store.storage.getUserByUsername(username);

  if (user && await AuthService.checkPassword(user, password)) {
    res.statusCode = 200;
    res.json({
      code: 200,
      message: 'OK',
      data: {
        user: UsersService.convertUserToResponseObject(user),
      },
      token: AuthService.generateToken(user),
    });
  } else {
    res.statusCode = 404;
    res.json({
      code: 404,
      message: 'Not Found',
    });
  }
}
