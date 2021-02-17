import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Input from './intput'
import Context from '@/presentation/contexts/form/form-context'

function makeSut (): RenderResult {
  return render(
    <Context.Provider value={{ state: {} }}>
      <Input name="field"/>
    </Context.Provider>
  )
}

describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const sut = makeSut()
    const input = sut.getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
