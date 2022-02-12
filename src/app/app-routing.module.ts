import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionDrawComponent } from './components/function-draw/function-draw.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FunctionDrawComponent,
  },
  {
    path: 'function-plot',
    component: FunctionDrawComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
