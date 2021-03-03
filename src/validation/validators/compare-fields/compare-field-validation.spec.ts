import faker from 'faker'

import { CompareFieldValidation } from './compare-field-validation'
import { InvalidFieldError } from '@/validation/errors'

function makeSut (field: string, fieldToCompare: string): CompareFieldValidation {
  return new CompareFieldValidation(field, fieldToCompare)
}

describe('CompareFieldValidation', () => {
  test('Should return error if compare is invalid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()

    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({
      [field]: faker.random.word(),
      [fieldToCompare]: faker.random.word()
    })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if compared is valid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const value = faker.random.word()

    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({
      [field]: value,
      [fieldToCompare]: value
    })
    expect(error).toBeFalsy()
  })
})
