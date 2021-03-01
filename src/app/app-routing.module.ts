import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoraComponent } from './components/dora/dora.component';
import { PantelisComponent } from './components/pantelis/pantelis.component';

const routes: Routes = [
  {path: '', component: DoraComponent},
  {path: 'pantelis', component: PantelisComponent},
  {path: 'dora', component: DoraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
