import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class  ReceipeService {
fetchnew = "";
intfetch:Observable<any> | undefined
display:any = []
keyword: string = "";
constructor(private http: HttpClient, private route:Router) { }
getreceipe(): Observable<any> {
  return this.http.get("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=28b998fd&app_key=c8f747027df1395bc0f254da33c19859");
}

fetchResultByKey(key: any): void{
  this.keyword = key;
  console.log(key);
  this.fetchnew = (`https://api.edamam.com/api/recipes/v2?type=public&q=${key}&app_id=28b998fd&app_key=c8f747027df1395bc0f254da33c19859`)
  this.intfetch = this.http.get(this.fetchnew);
  this.intfetch.subscribe((result)=>{
    console.log(result);
    this.display = result.hits;
    console.log(this.display)
    this.route.navigate(["search"])
  })

}
}