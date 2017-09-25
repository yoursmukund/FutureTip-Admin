import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReadingComponent } from './reading/reading.component';
import { ReadingListComponent } from './reading/reading-list/reading-list.component';
import { ReadingDetailComponent } from './reading/reading-detail/reading-detail.component';
import { ReadingItemComponent } from './reading/reading-list/reading-item/reading-item.component';
import { ReadingEditComponent } from './reading/reading-edit/reading-edit.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { ReadingService } from './reading/reading.service';
import { DropdownDirective } from './dropdown.directive';

const appRoutes:Routes = [
  {path: '', component: ReadingComponent },
  {path: 'readings', component:ReadingComponent, children: [
    {path: ':id', component: ReadingDetailComponent},
    {path: ':id/edit', component: ReadingEditComponent},
  ]},
  {path: 'signin' ,component: SigninComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ReadingComponent,
    ReadingListComponent,
    ReadingDetailComponent,
    ReadingItemComponent,
    ReadingEditComponent,
    HeaderComponent,
    SigninComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ReadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
