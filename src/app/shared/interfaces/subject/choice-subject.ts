export interface ChoiceSubject {
  name: string,
  description: string,
  typeSubject: string,
  understanding_rating: number,
  feedbacks: [
    {
      id: number,
      text: string,
      understanding_rating: number,
      speed_rating: number,
      overall_rating: number,
      date: string,
      choiseSubject: number
    }
  ],
  "speed_rating": number,
  "overall_rating": number,
  "teacher": number,
  "subject": number
}
