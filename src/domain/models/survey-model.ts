export type SurveyModel = {
  id: string
  question: string
  anwasers: [{
    image?: string
    anwaser: string
  }]
  date: Date
  didAnwaser: boolean
}
