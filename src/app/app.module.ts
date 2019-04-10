import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'angular2-spinner/dist';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	BrowserAnimationsModule,
	MatSnackBarModule,
	SpinnerModule,
	MatSelectModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	RouterModule.forRoot([
			{path: '', component: MovieSearchComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
