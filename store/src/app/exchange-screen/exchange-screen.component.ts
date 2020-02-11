import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-exchange-screen',
  templateUrl: './exchange-screen.component.html',
  styleUrls: ['./exchange-screen.component.scss']
})
export class ExchangeScreenComponent implements OnInit {

  constructor() { }

  myControl = new FormControl();
  filteredProducts: Observable<string[]>;
  filterValue = null;

  productDatabase = [{productPhoto:"../../assets/caneca.jpg", altPhoto: "caneca azul marinho", productName: "Caneca CINQ",productvalue: "20",productQuantity:"50",category: "caneca",productIcon: "fas fa-mug-hot"},
  {productPhoto:"../../assets/camiseta.jpg", altPhoto: "camiseta azul marinho", productName: "Camiseta CINQ",productvalue: "40",productQuantity:"100",category:"camiseta",productIcon:"fas fa-tshirt"},
  {productPhoto:"../../assets/garrafa.jpg", altPhoto: "garrafa azul marinho", productName: "Garrafa CINQ",productvalue: "25",productQuantity:"80",category:"garrafa",productIcon: "fas fa-wine-bottle"},
   ]

  productData = this.productDatabase;

  ngOnInit() { 
    this.filteredProducts = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    this.productData = this.productDatabase;
    console.log ("value of filter function",value);
    this.filterValue = this._normalizeValue(value);
    let productVector = this.productData.filter(product => product.category.includes(this.filterValue));
    console.log("product filtered",productVector);
    this.productData = productVector;
    return this.products.filter(product => this._normalizeValue(product).includes(this.filterValue));
  }

  private _normalizeValue(value: string): string {
    if(value != null){
      return value.toLowerCase().replace(/\s/g, '');
    }
    return null;
    
  }

  products = ['caneca', 'camiseta', 'garrafa'];


}
