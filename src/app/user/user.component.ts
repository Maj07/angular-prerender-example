import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `<h1>User: {{ id }}</h1>
    <p>This is {{ id }}'s profile</p>`,
  styles: [],
})
export class UserComponent {
  id = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe({ next: (res) => (this.id = res.id) });
  }
}
