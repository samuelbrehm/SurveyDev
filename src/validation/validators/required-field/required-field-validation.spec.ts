import faker from 'faker'

import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'
import { RequiredFieldError } from '@/validation/errors'

function makeSut (): RequiredFieldValidation {
  return new RequiredFieldValidation(faker.database.column())
}

describe('Required Field Validation', () => {
  test('Should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.words())
    expect(error).toBeFalsy()
  })
})
