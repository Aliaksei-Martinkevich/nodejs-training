import bcrypt from 'bcrypt';

const SALT_ROUNDS = 15;


export default function hash(data) {
  return bcrypt.hash(data, SALT_ROUNDS);
}
