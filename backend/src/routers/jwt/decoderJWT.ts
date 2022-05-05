import {verify, Secret} from 'jsonwebtoken';

export interface DecodedJwtTokenDto {
  exp: number,
  iat: number,
  sub: string
}

export const decodeJwt = (encodedToken: string) => {
  const secret: Secret = process.env.JWT_KEY!;
  return verify(encodedToken, secret) as DecodedJwtTokenDto;
};
