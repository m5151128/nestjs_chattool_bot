import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  createToken(userId: string, email: string) {
    // TODO: RS256で行うように変更
    const header = {
      alg: 'HS256',
      kid: 'collabo_tool_kid',
    };
    const payload = {
      sub: userId,
      email: email,
    };
    const secretKey = 'collabo_tool_secret_key';

    return jwt.sign(payload, secretKey, {
      algorithm: "HS256",
      expiresIn: '1h',
      header: header,
    });
  }
}
