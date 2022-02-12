import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { FunctionDrawComponent } from './components/function-draw/function-draw.component';
import { NgxMathFunctionPlotterModule } from 'ngx-math-function-plotter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NaviComponent, FunctionDrawComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMathFunctionPlotterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
