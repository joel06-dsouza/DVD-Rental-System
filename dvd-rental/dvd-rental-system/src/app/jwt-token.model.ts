// // jwt-token.model.ts
export class JwtToken {
    jwtToken: string;
    constructor(jwtToken: string) {
      this.jwtToken = jwtToken;
    }
  }