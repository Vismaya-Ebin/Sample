import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipost } from '../postDetails';
import { Observable } from 'rxjs';
// import * as data1 from '../JsonData/json1.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  [x: string]: any;
  private data = './app/JsonData/json1.json';

  constructor(
    private http: HttpClient
  ) { }

fetchProjectData(){
  return[{
      postId: 61,
      id: 301,
      name: 'id voluptatibus voluptas occaecati quia sunt eveniet et eius',
      email: 'Tiana@jeramie.tv',
      body: 'dolore maxime saepe dolor asperiores cupiditate nisi nesciunt\nvitae tempora ducimus vel eos perferendis\nfuga sequi numquam blanditiis sit sed inventore et\nut possimus soluta voluptas nihil aliquid sed earum'
    },
    {
      postId: 61,
      id: 301,
      name: 'id voluptatibus voluptas occaecati quia sunt eveniet et eius',
      email: 'Tiana@jeramie.tv',
      body: 'dolore maxime saepe dolor asperiores cupiditate nisi nesciunt\nvitae tempora ducimus vel eos perferendis\nfuga sequi numquam blanditiis sit sed inventore et\nut possimus soluta voluptas nihil aliquid sed earum'
    }]; }

getJsonData(): Observable<Ipost[]>{
 
  return this.http.get<Ipost[]>(this.data);
}
}
