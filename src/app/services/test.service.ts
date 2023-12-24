import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http: HttpClient
  ) { }

  doRequestApi() {
    return this.http.get('https://github.com/apimastery/APISimulator');
  }
}
