import React, { memo } from 'react'
import Styles from './login-header-styles.scss'

import { Logo } from '@/presentation/components'

const LoginHeader: React.FC = () => (
  <header className={Styles.headerWrap}>
    <Logo/>
    <h1>Enquete para Programadores</h1>
  </header>
)

export default memo(LoginHeader)
