import React from 'react'

import Styles from './survey-list-styles.scss'
import { Footer, Header, Icon, IconName } from '@/presentation/components'

const SurveyList: React.FC = () => {
  return (
    <div className={Styles.surveyListWrap}>
      <Header />

      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <ul>
          <li>
            <div className={Styles.surveyContent}>
              <Icon className={Styles.iconWrap} iconName={IconName.thumbUp} />
              <time>
                <span className={Styles.day}>11</span>
                <span className={Styles.month}>04</span>
                <span className={Styles.year}>2021</span>
              </time>
              <p>Qual o seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>

          <li>
          </li>
          <li>
          </li>
          <li>
          </li>

        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
