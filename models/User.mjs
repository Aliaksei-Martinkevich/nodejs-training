import uuidv4 from '../helpers/uuidv4';
import hash from '../helpers/hash';


export class User {
  constructor({
    username,
    email,
    password,
    passwordHash,
    id = uuidv4(),
  }) {
    this.username = username;
    this.email = email;
    if (passwordHash) {
      this.passwordHash = passwordHash;
    } else {
      this.passwordHash = hash(password);
    }
    this.id = id;
  }
}
