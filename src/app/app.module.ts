import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./common/profile/profile.component";
import { SkillPanelComponent } from "./common/skill-panel/skill-panel.component";
import { GlitchTextComponent } from "./common/glitch-text/glitch-text.component";
import { TypeWritingComponent } from "./common/type-writing/type-writing.component";
import { PieChartComponent } from "./common/charts/pie-chart/pie-chart.component";
import { BubblesComponent } from "./common/bubbles/bubbles.component";
import { IntoPanelComponent } from "./common/into-panel/into-panel.component";
import { InfoCardComponent } from "./common/info-card/info-card.component";
import { TimelineComponent } from './common/timeline/timeline.component';
import { ProjectCardComponent } from './common/project-card/project-card.component';
import { VideoPlayerComponent } from './common/video-player/video-player.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
  NbThemeModule,
  NbStepperModule,
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbIconModule,
  NbCardModule,
  NbAccordionModule,
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgChartsModule } from "ng2-charts";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(...registerables, ChartDataLabels);
import { TimelineModule  } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SkillPanelComponent,
    GlitchTextComponent,
    TypeWritingComponent,
    PieChartComponent,
    BubblesComponent,
    IntoPanelComponent,
    InfoCardComponent,
    TimelineComponent,
    ProjectCardComponent,
    VideoPlayerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    NbThemeModule.forRoot({ name: "default" }),
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    NbAccordionModule,
    NgChartsModule,
    NbStepperModule,
    TimelineModule,
    CardModule,
    ScrollTopModule,
    ButtonModule,
    ChipModule,
    YouTubePlayerModule,
    DialogModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
