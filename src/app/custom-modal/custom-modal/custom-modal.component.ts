import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit, OnDestroy {

  constructor(private activetedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public onDeactivate(event): void {
    console.log(event);
  }

  ngOnDestroy() {
    console.log(this.activetedRoute);
  }

}
