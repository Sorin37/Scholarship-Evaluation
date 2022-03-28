import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InternService } from './services/intern.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { InternsComponent } from './components/interns/interns.component';
import { AddInternComponent } from './components/add-intern/add-intern.component';
import { AddToolComponent } from './components/add-tool/add-tool.component';
import { EditInternComponent } from './components/edit-intern/edit-intern.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternsComponent,
    AddInternComponent,
    AddToolComponent,
    EditInternComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [InternService],
  bootstrap: [AppComponent]
})
export class AppModule { }
