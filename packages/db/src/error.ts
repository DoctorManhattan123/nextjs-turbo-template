export class DatabaseError extends Error {
  public id?: string;

  public constructor(message: string, id?: string) {
    super(message);

    this.message = message;
    this.id = id;
  }
}
