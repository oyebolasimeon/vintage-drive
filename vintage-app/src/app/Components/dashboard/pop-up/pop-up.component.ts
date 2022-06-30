import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
        private matDialogRef: MatDialogRef<PopUpComponent>
  ) { }

  ngOnInit(): void {

  }
  ngOnDestroy() {
    this.matDialogRef.close(this.data)
  }

  onCloseClick() {
    this.matDialogRef.close();
  }

}
