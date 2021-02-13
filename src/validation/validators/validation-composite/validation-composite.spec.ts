import { FieldValidationSpy } from '@/validation/validators/test/mock-field-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy('any_field'),
    new FieldValidationSpy('any_field')
  ]

  const sut = new ValidationComposite(fieldValidationsSpy)

  return {
    fieldValidationsSpy,
    sut
  }
}

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const { fieldValidationsSpy, sut } = makeSut()
    fieldValidationsSpy[0].error = new Error('first_error_message')
    fieldValidationsSpy[1].error = new Error('second_error_message')

    const error = sut.validate('any_field', 'any_value')

    expect(error).toBe('first_error_message')
  })
})
