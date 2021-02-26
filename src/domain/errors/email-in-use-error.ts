export class EmailInUseError extends Error {
  constructor () {
    super('Este e-amil já está em uso')
    this.name = 'EmailInUseError'
  }
}
