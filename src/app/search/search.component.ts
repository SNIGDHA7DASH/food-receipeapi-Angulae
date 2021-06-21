import { Component, OnInit } from '@angular/core';
import { ReceipeService } from '../receipeservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  displays: any = [];
  keyword: string = "";
  
    constructor(private recipeService:  ReceipeService) {}
    ngOnInit(): void {
  
      this.load();
    }
    load(){
      this.displays = this.recipeService.display;
      this.keyword = this.recipeService.keyword;
      console.log(this.displays);
    }

}