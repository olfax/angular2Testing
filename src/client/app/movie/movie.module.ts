import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms'
import { MovieComponent} from './movie.component';
import { MovieFormComponent} from './movieform.component';
import { MovieRoutingModule} from './movie-routing.module';

@NgModule({
  imports: [ CommonModule,MovieRoutingModule,ReactiveFormsModule],
  declarations: [MovieComponent, MovieFormComponent],
  exports: [MovieComponent]
})
export class MovieModule { 

}
