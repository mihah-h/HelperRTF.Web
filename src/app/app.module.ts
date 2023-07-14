import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiLinkModule,
  TuiThemeNightModule,
  TuiModeModule,
  TuiTextfieldControllerModule,
  TuiLoaderModule,
  TuiButtonModule,
  TuiHintModule,
  TuiErrorModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { CourseReviewsPageComponent } from './course-reviews-page/course-reviews-page.component';
import { TeacherReviewsPageComponent } from './teacher-reviews-page/teacher-reviews-page.component';
import {
  TuiAccordionModule,
  TuiAvatarModule, TuiElasticContainerModule, TuiFieldErrorPipeModule,
  TuiHighlightModule,
  TuiInputModule, TuiInputPasswordModule,
  TuiRatingModule,
  TuiTabsModule, TuiTextAreaModule
} from "@taiga-ui/kit";
import {HttpClientModule} from "@angular/common/http";
import { SearchSubjectsPipe } from './shared/pipes/search-subjects.pipe';
import { CoursePageComponent } from './course-page/course-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import {of} from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CourseReviewsPageComponent,
    TeacherReviewsPageComponent,
    SearchSubjectsPipe,
    CoursePageComponent,
    AuthPageComponent
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
    TuiButtonModule,
    TuiHintModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputPasswordModule
  ],
  providers: [
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    },
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    {provide: 'API_URL', useValue: 'http://127.0.0.1:8000/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
