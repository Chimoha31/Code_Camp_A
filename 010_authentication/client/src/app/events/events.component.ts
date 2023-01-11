import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events = [];
  constructor(private _eventServise: EventService) {}

  ngOnInit(): void {
    this._eventServise.getEvents().subscribe(
      (res: any) => (this.events = res),
      (err: any) => console.log(err)
    );
  }
}
