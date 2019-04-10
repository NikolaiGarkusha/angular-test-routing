import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomModalComponent } from '../custom-modal/custom-modal/custom-modal.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  public test() {
    this.dialog.open(CustomModalComponent,
      {
        width: '400px',
        height: '400px'
      }).afterClosed().subscribe(
        () => {
          this.router.navigate([{outlets: { modal: null }}], {
            relativeTo: this.activatedRoute
        });
        }
      );
  }

}
