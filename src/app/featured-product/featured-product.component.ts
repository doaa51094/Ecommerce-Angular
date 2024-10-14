import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductsService } from './../../core/servises/products.service';
import { Product } from '../product';
declare var bootstrap: any;

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss'],
})
export class FeaturedProductComponent implements OnInit ,AfterViewInit {

  allProducts:Product[]=[];
  constructor(private _productsService: ProductsService) {}
  ngAfterViewInit() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  ngOnInit(): void {
   this.getAllProducts()
  }
  getAllProducts(){
    this._productsService.getProducts().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.allProducts=res?.data;

      }
    })
  }
}
