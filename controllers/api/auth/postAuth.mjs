export default async function postAuth(req, res, next) {
  const { user, app } = req;
  const container = app.get('container');

  if (user) {
    res.statusCode = 200;
    res.json({
      code: 200,
      message: 'OK',
      data: {
        user: container.get('users').constructor.convertUserToResponseObject(user),
      },
      token: container.get('auth').constructor.generateToken(user),
    });
  } else {
    res.statusCode = 404;
    res.json({
      code: 404,
      message: 'Not Found',
    });
  }
}
