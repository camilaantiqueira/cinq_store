import { Component,HostBinding, OnInit,Inject,Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

export interface DialogData {
  price: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('trueFalse', [
      // ...
      state('true', style({
        width: '70%',
        
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class ProductComponent implements OnInit {

  animal: string;
  name: string;
  showButton: boolean = false;
  purchaseValue: number;

  @Input() productPhoto: string;
  @Input() altPhoto: string;
  @Input() productName : string;
  @Input() productvalue : number;
  @Input() productQuantity : string;
  @Input() productIcon : string; 


  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent,{
      width: '450px',
      data: {price: this.productvalue, purchase: this.purchaseValue}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.purchaseValue = result;
    });
  }
  

  ngOnInit() {
  }

}
