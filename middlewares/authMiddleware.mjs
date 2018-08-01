export default function authMiddleware(req, res, next) {
  const token = req.header('Authorization');

  const container = req.app.get('container');

  if (container.get('auth').constructor.verifyToken(token)) {
    next();
  } else {
    res.statusCode = 403;
    res.json({
      code: 403,
      message: 'Token is invalid',
    });
  }
}
