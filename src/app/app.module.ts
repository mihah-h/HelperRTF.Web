import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiLinkModule,
  TuiThemeNightModule, TuiModeModule, TuiTextfieldControllerModule, TuiLoaderModule, TuiButtonModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { CourseReviewsPageComponent } from './course-reviews-page/course-reviews-page.component';
import { TeacherReviewsPageComponent } from './teacher-reviews-page/teacher-reviews-page.component';
import {
    TuiAccordionModule,
    TuiAvatarModule, TuiElasticContainerModule,
    TuiHighlightModule,
    TuiInputModule,
    TuiRatingModule,
    TuiTabsModule, TuiTextAreaModule
} from "@taiga-ui/kit";
import {HttpClientModule} from "@angular/common/http";
import { SearchSubjectsPipe } from './shared/pipes/search-subjects.pipe';
import { CoursePageComponent } from './course-page/course-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CourseReviewsPageComponent,
    TeacherReviewsPageComponent,
    SearchSubjectsPipe,
    CoursePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiLinkModule,
    TuiThemeNightModule,
    TuiModeModule,
    TuiAvatarModule,
    TuiAccordionModule,
    TuiInputModule,
    TuiTabsModule,
    TuiTextfieldControllerModule,
    TuiRatingModule,
    TuiLoaderModule,
    TuiHighlightModule,
    TuiElasticContainerModule,
    TuiTextAreaModule,
    TuiButtonModule
  ],
  providers: [
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    {provide: 'API_URL', useValue: 'http://127.0.0.1:8000/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
