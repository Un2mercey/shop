import {Injectable} from '@angular/core';
import {IProduct} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {IProductResponse$} from '../models/product-request$';
import * as _ from 'lodash';
import {Subscription} from 'rxjs';

@Injectable ({
	providedIn: 'root'
})
export class RandomizeService {
	private isRandom: boolean;
	public goRandom: Subscription;
	public products: Array<IProduct>;

	constructor(private http: HttpClient) {
		this.isRandom = false;
		this.products = [];
		this.goRandom = this.http.get('https://fakestoreapi.com/products?limit=25')
			.subscribe((products:Array<IProductResponse$> ) => this.getProductsHandler(products),
				error => {console.log(error)},
				() => this.randomize());
	}
	private getProductsHandler = (response: Array<IProductResponse$>) => {
		_.forEach(response, (eachProduct: IProductResponse$) => {
			this.products.push({
				id: eachProduct.id,
				title: eachProduct.title,
				category: eachProduct.category,
				description: eachProduct.description,
				image: eachProduct.image,
				price: eachProduct.price,
				discount: false,
				discountPrice: eachProduct.price
			})
		})
	}

	private randomize = (): void => {
		if(!this.isRandom) {
			this.isRandom = true;
			setInterval(() => {
				_.forEach(this.products, (product: IProduct) => {
					product.discount = false;
					product.discountPrice = product.price;
				});
				let rndIndx: number = Math.floor(Math.random() * this.products.length);
				let rndDisc: number = (Math.floor(Math.random() * 100) + 1) / 100;
				this.products[rndIndx].discount = true;
				this.products[rndIndx].discountPrice = this.products[rndIndx].price * rndDisc;
			}, 1000)
		}
	}
}
