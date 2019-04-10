import { Component } from '@angular/core';

class Link {
  constructor(
    public name: string,
    public url: string
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public links: Link[] = [
    new Link('Main page', '/'),
    new Link('First Module', 'first'),
    new Link('Second Module', 'second')
  ];
}
