import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>Home Page</h1>
    <p>Hello World, welcome to the home page</p> `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
