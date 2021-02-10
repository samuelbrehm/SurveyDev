import faker from 'faker'

import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors'

function makeSut (): EmailValidation {
  return new EmailValidation(faker.database.column())
}

describe('Email validation', () => {
  test('Should return error if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
