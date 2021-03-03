import faker from 'faker'

import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'
import { RequiredFieldError } from '@/validation/errors'

function makeSut (field: string): RequiredFieldValidation {
  return new RequiredFieldValidation(field)
}

describe('Required Field Validation', () => {
  test('Should return error if field is empty', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: '' })
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.words() })
    expect(error).toBeFalsy()
  })
})
