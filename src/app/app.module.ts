import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GANTT_GLOBAL_CONFIG, NgxGanttModule } from '@worktile/gantt';
import { GanttComponent } from './gantt/gantt.component';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GanttComponent,
    GanttChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGanttModule
  ],
  providers: [
    {
      provide: GANTT_GLOBAL_CONFIG,
      useValue: {
        dateFormat: {
             yearQuarter: `QQQ 'of' yyyy`,
             month: 'LLLL',
             yearMonth: `LLLL yyyy'(week' w ')'`
        }
      }
    }
 
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
