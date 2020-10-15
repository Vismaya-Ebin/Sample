
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 
  constructor(private httpClient: HttpClient) { }
  isChecked = new Subject<any>();
  getHeaders(){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return httpHeaders;
  }

  getContacts(){
    const postUrl = `http://localhost:3000/posts`;
    const contactUrl = 'http://localhost:3000/contacts';
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: 'vismu@123'
    });
    // we can use custom set or append of adding new properties
    httpHeaders = httpHeaders.set('tcsEmpID', '1544390');
    httpHeaders = httpHeaders.set('pwd', 'tcs@123');

    const getAuthToken = httpHeaders.get('Authorization');
    if (getAuthToken) {
    console.log(`Http Header`, getAuthToken);
    }
    return this.httpClient.get(postUrl, {headers: httpHeaders});
  }

  postContact(reqBody){
    return this.httpClient.post('http://localhost:3000/contacts', reqBody, {headers: this.getHeaders()});
  }

  updateContact(id, reqbody){
    return this.httpClient.put('http://localhost:3000/contacts/' + id , reqbody);
  }

  getConyactById(){
    const httpParam = new HttpParams({
      fromObject : {
        id: '33',
        author:'vismaya\n'

      }
    });
    const httpParam1 = new HttpParams({
      fromString :`id =${1}`
    });
    return this.httpClient.get(`http://localhost:3000/posts`, {params : httpParam1});
  }
}
