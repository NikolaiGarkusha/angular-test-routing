import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }


  ngOnDestroy() { }

  close() {
    this.router.navigate(['/', { outlets: { modal: null }}], { relativeTo: this.activatedRoute.parent})
  }

  public overlayClick(): void {
    this.close();
  }

}
