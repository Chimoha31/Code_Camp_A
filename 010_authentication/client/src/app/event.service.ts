import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private _eventsUrl = 'http://localhost:5000/api/events';
  private _specialEventsUrl = 'http://localhost:5000/api/special';
  constructor(private http: HttpClient) {}

  getEvents() {
    // return this.http.get<any>(this._eventsUrl)
    return this.http.get<any>('http://localhost:5000/api/events');
  }

  getSpecial() {
    return this.http.get<any>(this._specialEventsUrl);
  }
}
