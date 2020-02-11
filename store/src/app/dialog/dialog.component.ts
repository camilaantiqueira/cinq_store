import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {coerceNumberProperty} from '@angular/cdk/coercion';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  quantity = 1;
  productValue: number;
  purchaseValue: number;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.productValue = data.price;
    
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setProductValues(): void{
    this.purchaseValue = this.productValue * this.quantity;
    console.log("preco",this.purchaseValue);
    this.dialogRef.close();
  }

}
