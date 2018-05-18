import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateComponent } from './Components/update/update.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { ViewComponent } from './Components/view/view.component';
import { AppInputDirective } from './Components/register/register.input.directive';
import { CosmosdbService } from './services/cosmosdb.service';

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
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'register/:',
        component: RegisterComponent
      },
      {
        path: 'view',
        component: ViewComponent
      }
    ])
    ],
  providers: [CosmosdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
