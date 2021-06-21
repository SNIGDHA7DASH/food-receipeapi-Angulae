import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeComponent } from './receipe/receipe.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { 
    path : 'search' , 
    component : SearchComponent
  },
  { 
    path : '' ,
     component : ReceipeComponent 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
