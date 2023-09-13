/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import('./src/auth/lucia').Auth
  type DatabaseUserAttributes = {
    email: string
  }
  type DatabaseSessionAttributes = {}
}
