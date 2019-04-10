import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CustomModalComponent } from '../../../custom-modal/custom-modal/custom-modal.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router
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
          this.router.navigate([{outlets: { modal: null }}]);
        }
      );
  }

}
