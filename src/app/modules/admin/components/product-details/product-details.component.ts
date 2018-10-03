import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs/internal/Subject';
import {ProductsService} from '../../../products/services/products.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productDetails: any;
  newItem = {
    Name: '',
    Description: '',
    Price: ''
  };
  private destroy$: Subject<boolean> = new Subject<boolean>();
  activeTab = 0;
  products;
  keys = Object.keys;
  values = Object.values;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productsService.getItem(params['productId']).subscribe((productDetails) => {
        this.productDetails = productDetails;
        this.products = productDetails.products || {};
      });
    });
  }

  // Merging object from database and object from loaded file
  mergeData(objDnl, objFile) {
    const keys = this.keys(objFile);
    for (let i = 0; i < keys.length; i++) {
      objFile[keys[i]].filter(item => {
        if (objDnl[keys[i]]) {
          objDnl[keys[i]].forEach(dnl => {
            return item.Description !== dnl.Description;
          });
        } else {
          return true;
        }
      });
    }
    Object.assign(objDnl, ...objFile);
  }

  onFileLoad(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.readAsText(file, 'UTF-8');
    const loadedObj = {};

    reader.onload = () => {
      // Splitting text from file by newline and then by '__'. Adding only unique items
      reader.result.split('\n').forEach(key => {
        const arr = key.split('__');
        if (arr[0].length > 0) {
          if (loadedObj.hasOwnProperty(arr[0])) {
            let uniq = true;
            loadedObj[arr[0]].forEach(data  => {
              uniq = data.Description !== arr[1] && uniq;
            });
            if (uniq) {
              loadedObj[arr[0]].push({Description: arr[1], Price: arr[2]});
            }
          } else {
            loadedObj[arr[0]] = [{Description: arr[1], Price: arr[2]}];
          }
        }
      });
      this.mergeData(this.products, loadedObj);
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  addFile(): void {
    this.productsService.updateProducts(this.productDetails.id, this.products);
  }

  removeItem(item) {
    console.log(this.products[this.keys(this.products)[this.activeTab]].splice(item, 1));
    console.log(this.products);

  }

  addNew(): void {
    this.productsService.addProductToCategory(this.productDetails.id, this.products);
  }
}
