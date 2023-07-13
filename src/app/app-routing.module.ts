import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {CourseReviewsPageComponent} from "./course-reviews-page/course-reviews-page.component";
import {TeacherReviewsPageComponent} from "./teacher-reviews-page/teacher-reviews-page.component";
import {CoursePageComponent} from "./course-page/course-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainLayoutComponent, children: [
      {path: '', component: CourseReviewsPageComponent, pathMatch: 'full'},
      {path: 'teacher-reviews', component: TeacherReviewsPageComponent},
      {path: 'course', component: CoursePageComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
