import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoderComponent } from './coder/coder.component';
import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
  {component:HomeComponent, path:""},
  {component:CoderComponent, path:"coder"},
  {component:ArtistComponent, path:"artist"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
