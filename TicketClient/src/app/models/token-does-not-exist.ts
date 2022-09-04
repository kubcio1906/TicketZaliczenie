export class TokenDoesNotExist extends Error {
  constructor(message?: string) {
    super(message); // 'Error' breaks prototype chain here
    this.name = 'TokenDoesNotExist';
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
