import React from 'react'

import { makeSignUpValidation } from '@/main/factories/pages/signup/signup-validation-factory'
import { makeRemoteAddAccount } from '@/main/factories/usecases/add-account/remote-authentication-factory'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/save-access-token/local-save-access-token-factory'

import { SignUp } from '@/presentation/pages'

export const makeSignUp: React.FC = () => {
  return <SignUp
    addAccount={makeRemoteAddAccount()}
    validation={makeSignUpValidation()}
    saveAccessToken={makeLocalSaveAccessToken()}
  />
}
