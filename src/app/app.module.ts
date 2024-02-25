import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './common/profile/profile.component';
import { SkillPanelComponent } from './common/skill-panel/skill-panel.component';
import { GlitchTextComponent } from './common/glitch-text/glitch-text.component';
import { TypeWritingComponent } from './common/type-writing/type-writing.component';
import { PieChartComponent } from './common/charts/pie-chart/pie-chart.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbIconModule, NbCardModule, NbAccordionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SkillPanelComponent,
    GlitchTextComponent,
    TypeWritingComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    NbAccordionModule,
    NgChartsModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
  

 }
