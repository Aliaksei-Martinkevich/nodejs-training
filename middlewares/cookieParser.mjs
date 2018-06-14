import cookie from 'cookie';


export default function cookieParser(req, res, next) {
  req.parsedCookies = req.cookies && cookie.parse(req.cookies);
  next();
}
