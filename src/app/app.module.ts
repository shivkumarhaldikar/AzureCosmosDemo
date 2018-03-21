import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateComponent } from './Components/update/update.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { ViewComponent } from './Components/view/view.component';
import { AppInputDirective } from './Components/register/register.input.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UpdateComponent,
    DeleteComponent,
    ViewComponent,
    AppInputDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'view',
        component: ViewComponent
      }
    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
