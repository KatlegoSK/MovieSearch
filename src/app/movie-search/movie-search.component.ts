import { Component, OnInit } from '@angular/core';

//MatSnackBar is an Angular material feature which displays information in a user friendly format
import { MatSnackBar } from '@angular/material';

//A module for making API requests and queries
import axios from 'axios';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  //Aunthentication API key
   apiKey:string = "40fbd301bedd1c06f864c06ca52a2684";
  
  //A variable to handle events using a loader based on response or error
  isWait: boolean  = false;
  
  hasFoundResults: boolean = false;
  
  movies:any;
  
  selectedMovie:any;
  hasSelectedMovie:boolean = false;
  
  constructor(private snackBar : MatSnackBar) { }
  
  onSearch(form)
  {
		
		this.hasFoundResults = false;
		this.hasSelectedMovie = false;
		this.isWait = true;
		
		
		let movieTitle = form.value.movieTitle;
	    let urlPath = "https://api.themoviedb.org/3/search/movie?api_key="+this.apiKey+"&query="+movieTitle;
		
		 //A request for getting movie results
		 axios.get(urlPath)
			 .then(response =>{
			 
			     this.isWait = false;
			
		         form.reset();
				 
				 if(response.data.results.length == 0)
				 {
					this.snackBar.open("The information was not found", "OK", {});
					
				 
				 }else{
				 
					this.movies = response.data.results;
					this.hasFoundResults = true;
					
				 
				 }
				 
				 
				 
			 }).catch(error =>{
				 
				  
				  this.isWait = false;
				  this.snackBar.open("The movie was not found", "OK", {});
				 
				 
			})
	
  }
  
  //A function to get specific details of a movie
  onSelectTitle(movie)
  {
     
	  this.selectedMovie = movie;
	  this.hasFoundResults = false;
	  this.hasSelectedMovie = true;
       
  }

  ngOnInit() {
  }

}
