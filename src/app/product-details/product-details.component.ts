import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../core/servises/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: string = '';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      console.log(res.params.id);
      this.productId = res.params.id;
    });
  }
  ngOnInit(): void {
    this.getProductDetails();
  }
  getProductDetails() {
    this._productsService.getProductDetails(this.productId).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
