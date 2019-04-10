import { Component, OnInit } from '@angular/core';

class Link {
  constructor(
    public name: string,
    public url: string
  ) { }
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public links: Link[] = [
    new Link('User', 'user'),
    new Link('Purchase', 'purchase'),
    new Link('Checkout', 'checkout')
  ];

  constructor() { }

  ngOnInit() {
  }

}
