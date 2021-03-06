import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantelisComponent } from './components/pantelis/pantelis.component';
import { DoraComponent } from './components/dora/dora.component';
import { MyComponentComponent } from './components/my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PantelisComponent,
    DoraComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
