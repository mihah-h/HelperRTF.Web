export interface ChoiceSubject {
  id: number,
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
  subject: {
    id: number,
    name: string
  },
  teacher: {
    id: number,
    first_name: string,
    second_name: string,
    middle_name: string
  },
  teacherFullName: string
}
