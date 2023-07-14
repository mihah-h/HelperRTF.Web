import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {ReviewsPageComponent} from "./reviews-page/reviews-page.component";
import {CoursePageComponent} from "./course-page/course-page.component";
import {AuthPageComponent} from "./auth-page/auth-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainLayoutComponent, children: [
      {path: '', component: ReviewsPageComponent, pathMatch: 'full'},
      {path: 'course/:id', component: CoursePageComponent}
    ]},
  {path: 'auth', component: AuthPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
