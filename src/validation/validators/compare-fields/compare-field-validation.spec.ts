import faker from 'faker'

import { CompareFieldValidation } from './compare-field-validation'
import { InvalidFieldError } from '@/validation/errors'

function makeSut (valueToCompare: string): CompareFieldValidation {
  return new CompareFieldValidation(faker.database.column(), valueToCompare)
}

describe('CompareFieldValidation', () => {
  test('Should return error if compare is invalid', () => {
    const sut = makeSut(faker.random.word())
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if compared is valid', () => {
    const valueToCompare = faker.random.word()
    const sut = makeSut(valueToCompare)
    const error = sut.validate(valueToCompare)
    expect(error).toBeFalsy()
  })
})