import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceipeService} from '../receipeservice.service'
@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {

  key: string = ""
  constructor(private recipeApiService: ReceipeService) { }

  ngOnInit(): void {
}
recipe(): void{
  this.recipeApiService.fetchResultByKey(this.key);
  }
}
