import { Component, OnInit } from '@angular/core';
declare function func():any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Drum-Kit-Project';
  ngOnInit():void
  {
    func();
  }
}
