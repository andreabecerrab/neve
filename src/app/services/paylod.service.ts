import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  // Fake call to simulate my service
  async getSiteData(): Promise<any> {
    return data;
  }
}
