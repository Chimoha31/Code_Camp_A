import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css'],
})
export class SpecialComponent implements OnInit {
  specialEvents:any = [];
  constructor(private _eventServise: EventService) {}

  ngOnInit(): void {
    this._eventServise.getSpecial().subscribe(
      (res: any) => (this.specialEvents = res),
      (err: any) => console.log(err)
    );
  }
}
