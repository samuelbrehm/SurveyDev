import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'
import { ValidationBuilder as sut } from '@/validation/validators/builder/validation-builder'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidator', () => {
    const validations = sut.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })
})
