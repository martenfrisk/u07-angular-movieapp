import { MoviePosterPipe } from './movie-poster.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MoviePosterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoviePosterPipe
  ]
})
export class PipemoduleModule { }
