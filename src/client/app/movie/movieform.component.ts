import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

// https://www.youtube.com/watch?v=maLRLSGeoX8

@Component( {
  moduleId: module.id,
  selector: 'sd-form',
  templateUrl: 'movieform.component.html'

})
export class MovieFormComponent implements OnInit  {

  movieFormGroup: FormGroup; 

 constructor(public fb:FormBuilder) {

 }

  ngOnInit() {
    /*
    this.movieFormGroup = new FormGroup( {
        movieTitle: new FormControl(),
        movieDirector: new FormControl()
    } );
    */

    this.movieFormGroup = this.fb.group( {
        movieTitle: '',
        movieDirector: ''
    } );

  this.movieFormGroup.setValue( {
        movieTitle: 'Terminator',
        movieDirector: 'James Cameron'
    } );

  }

  onMovieSubmit() {
    Console.log("movie submit");
   
  }

}