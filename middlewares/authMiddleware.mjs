import AuthService from '../services/AuthService';


export default function authMiddleware(req, res, next) {
  const token = req.header('Authorization');
  if (AuthService.verifyToken(token)) {
    next();
  } else {
    res.statusCode = 403;
    res.json({
      code: 403,
      message: 'Token is invalid',
    });
  }
}
