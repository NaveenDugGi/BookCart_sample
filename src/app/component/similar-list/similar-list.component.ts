import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-similar-list',
  templateUrl: './similar-list.component.html',
  styleUrls: ['./similar-list.component.scss']
})
export class SimilarListComponent implements OnInit {
  productList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {}

}

