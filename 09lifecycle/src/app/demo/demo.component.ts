import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit, OnChanges, DoCheck {
  @Input() value: string = 'First';

  // constructor is not lifecycle, just a javascript
  constructor() {
    console.log('Constructor was called');
    // console.log(this.value);
  }

  // Only one lifecycle hook which takes an argument
  // It will get called when the value of input property changes
  // 値が同じ場合だとここは走らない(ngDoCheckと逆)
  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges was called');
    // console.log(change);
  }

  // ngOninit is a place where you want to add any init logic for your component
  ngOnInit() {
    console.log('ngOninit was called');
    // console.log(this.value);
  }

  // ngOnChangesと似ているが、値が同じ場合でもここが走る。
  ngDoCheck() {
    console.log('ngDoCheck was called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContetInit was called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked was called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit was called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked was called');
  }

  // DOMから消えた(消した)時に走る。
  ngOnDestroy() {
    console.log('ngOnDestroy was called');
  }
}
