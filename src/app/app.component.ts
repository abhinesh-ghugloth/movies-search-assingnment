import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { MoviesChar } from './movies-char';
import { error } from 'selenium-webdriver';
import { LowerCasePipe } from '@angular/common/src/pipes';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  constructor(private moviesServie:MovieService){}
 term:any;
  mNames:MoviesChar[];
  copymNames:MoviesChar[]=[];
  errorMessages:string;

  loadMovies(){
    this.moviesServie.getMoviess()
    .subscribe(
      mNames =>this.mNames=mNames,
      error=>this.errorMessages=<any>error,
()=> this.copymNames=this.mNames,

    );
  }
}

console.log(this.moviesNames,"this is movie list")
