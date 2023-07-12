import { Pipe, PipeTransform } from '@angular/core';
import {Subject} from "../interfaces/subject/subject";

@Pipe({
  name: 'searchSubjects'
})
export class SearchSubjectsPipe implements PipeTransform {

  transform(subjects: Subject[], search = ''): Subject[] {
    if (!search.trim()) {
      return subjects
    }

    return subjects.filter(subject => {
      return (subject.name + ' ' + '(' + subject.semester + ' ' + 'семестр' + ')').toLowerCase().includes(search.toLowerCase())
    })
  }

}
