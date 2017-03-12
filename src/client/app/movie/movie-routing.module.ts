import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'movie', component: MovieComponent }
    ])
  ],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
