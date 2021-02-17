import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'
import { ValidationBuilder as sut } from '@/validation/validators/builder/validation-builder'
import { EmailValidation } from '@/validation/validators'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidator', () => {
    const validations = sut.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('Should return EmailValidation', () => {
    const validations = sut.field('any_field').email().build()
    expect(validations).toEqual([new EmailValidation('any_field')])
  })
})
