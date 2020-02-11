import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';

  productData = [{productPhoto:"../../assets/caneca.jpg", altPhoto: "caneca azul marinho", productName: "Caneca CINQ",productvalue: "20",productQuantity:"50"},
                 {productPhoto:"../../assets/camiseta.jpg", altPhoto: "camiseta azul marinho", productName: "Camiseta CINQ",productvalue: "40",productQuantity:"100"},
                 {productPhoto:"../../assets/garrafa.jpg", altPhoto: "garrafa azul marinho", productName: "Garrafa CINQ",productvalue: "25",productQuantity:"80"},
                  ]

}
