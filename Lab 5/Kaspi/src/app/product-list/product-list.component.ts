import { Component, OnInit } from '@angular/core';

import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products = [...products];
  
  productsCategory: Product[] | undefined;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    const categoryIdFromRoute = Number(routeParams.get("categoryId"));

    this.products = this.products.filter( p => p.categoryId === categoryIdFromRoute);
  }


  

  share(link: string) {
    const shareMessage = `Product:  ${link}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = telegramLink;
  }

  share_kaspi(link: string){
    window.location.href = link
  }

  likeProduct(productId: number){
    var product = this.products.find(p => p.id === productId);
    if(product !== undefined){
      product.likes++;
    }
  }

  deleteProduct(productId: number){
    this.products = this.products?.filter(p => p.id !== productId)
  }
}