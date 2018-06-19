import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const secret = 'secret';


export default class AuthService {
  static generateToken(user) {
    return jwt.sign({
      username: user.username,
    }, secret, {
      algorithm: 'HS512',
      expiresIn: 60 * 60 * 1000,
    });
  }

  /**
   * @param {User} user
   * @param {string} password
   */
  static async checkPassword(user, password) {
    return bcrypt.compare(password, user.passwordHash);
  }

  static verifyToken(token) {
    try {
      jwt.verify(token, secret, {
        algorithms: ['HS512'],
      });

      return true;
    } catch (error) {
      return false;
    }
  }
}
