import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryDetailsComponent } from './diary-details/diary-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { DiaryFormComponent } from './diary-form/diary-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DiaryDetailsComponent,
    StrikethroughDirective,
    GoalFormComponent,
    DiaryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
