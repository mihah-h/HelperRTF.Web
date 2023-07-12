import {ChoiceSubject} from "./choice-subject";

export interface Subject {
  name: string,
  semester: number,
  choice_subjects: ChoiceSubject[]
}
