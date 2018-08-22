import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule,MatListModule,MatGridListModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatMenuModule,MatFormFieldModule} from '@angular/material';
import {RouterModule,Routes} from '@angular/router'
import { NoteComponentComponent } from './note-component/note-component.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponentComponent,
    NoteCreateComponent,
    NoteEditComponent,
    MainNavComponent,
    DashboardComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'' , redirectTo: 'Dashboard', pathMatch:'full'},
      {path:'Dashboard', component: NoteComponentComponent},
      {path:'Edit/:id',component:NoteEditComponent},
      {path:'CreateNote',component:NoteCreateComponent}
     ]),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
