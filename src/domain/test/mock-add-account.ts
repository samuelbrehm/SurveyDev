import { AddAccountParams } from '@/domain/usecases'

import faker from 'faker'

export const mockAddAccountParams = (): AddAccountParams => {
  const passwordMock = faker.internet.password()

  return {
    name: faker.name.findName(),
    email: faker.internet.email(),

    password: passwordMock,
    passwordConfirmation: passwordMock

  }
}
