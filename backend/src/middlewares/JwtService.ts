import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

export default class JwtService {
  static sign(payload: { email: string, password: string }) {
    return jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '24h',
    });
  }

  static verify(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  }
}