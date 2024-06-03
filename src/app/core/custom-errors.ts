export class AccessAdminError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Accès réservé aux administrateurs uniquement";
  }
}
