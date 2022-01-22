import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './layout/hero/hero.component';
import { ButtonComponent } from './layout/shared/button/button.component';
import { MyWorkComponent } from './layout/my-work/my-work.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SkillsComponent } from './layout/skills/skills.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonLiveComponent } from './layout/shared/button-live/button-live.component';
import { ButtonCodeComponent } from './layout/shared/button-code/button-code.component';
import { TestimonialsComponent } from './layout/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ButtonComponent,
    MyWorkComponent,
    FooterComponent,
    SkillsComponent,
    ButtonLiveComponent,
    ButtonCodeComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
