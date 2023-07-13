import {ChoiceSubject} from "./choice-subject";

export interface Subject {
  id: number,
  name: string,
  semester: number,
  choice_subjects: ChoiceSubject[]
}
