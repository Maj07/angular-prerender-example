import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `<h1>Contact</h1>
    <p>You can contact me on : +1 *** *** *** *23</p>`,
  styles: [],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
