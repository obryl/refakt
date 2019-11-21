import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs/internal/Subject';
import {ProductsService} from '../../../products/services/products.service';
import {saveAs} from 'file-saver';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productDetails: any;
  newItem = new FormGroup({
      Name: new FormControl('', Validators.required),
      Description: new FormControl('', Validators.required),
      Price: new FormControl('', Validators.required)
    }
  );

  private destroy$: Subject<boolean> = new Subject<boolean>();
  activeTab = 0;
  products;
  keys = Object.keys;
  values = Object.values;
  handrailsPcsUrls;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productsService.getItem(params['productId']).subscribe((productDetails) => {
        this.productDetails = productDetails;
        this.products = productDetails.products || {};
        this.handrailsPcsUrls = productDetails.products || [];
      });
    });
  }


  // Merging object from database and object from loaded file
  mergeData(objDnl, objFile) {
    const keys = this.keys(objFile);
    const filteredObj = {};
    for (let i = 0; i < keys.length; i++) {
      filteredObj[keys[i]] = objFile[keys[i]].filter(item => {
        if (objDnl[keys[i]]) {
          let unique = true;
          objDnl[keys[i]].forEach(dnl => {
            item.Description !== dnl.Description && unique ? unique = true : unique = false;
          });
          return unique;
        } else {
          return true;
        }
      });
    }
    const filteredKeys = this.keys(filteredObj);
    filteredKeys.forEach(elem => {
      if (objDnl[elem]) {
        objDnl[elem].push(...filteredObj[elem]);
      } else {
        objDnl[elem] = filteredObj[elem];
      }
    });

  }

  onPictureLoad(event) {
    const file = event.target.files;
    for (const key in file) {
      if (file.hasOwnProperty(key)) {
        this.productsService.uploadPicture(file[key])
          .then(item => item.ref.getDownloadURL()
            .then(url => {
              this.handrailsPcsUrls.push(url);
                this.productsService.updateProducts(this.productDetails.id, this.handrailsPcsUrls);
              }
            )
          );
      }
    }

  }

  onFileLoad(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.readAsText(file, 'UTF-8');
    const loadedObj = {};

    reader.onload = () => {
      // Splitting text from file by newline and then by '__'. Adding only unique items
      // console.log(reader.result);
      reader.result.split('\n').forEach(key => {
        const arr = key.split('__');
        if (arr[0].length > 1) {
          if (loadedObj.hasOwnProperty(arr[0])) {
            let uniq = true;
            loadedObj[arr[0]].forEach(data => {
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

  removeItem(index) {
    this.products[this.keys(this.products)[this.activeTab]].splice(index, 1);
  }

  addNew(): void {
    const obj = {};
    obj[this.newItem.value.Name] = [{Description: this.newItem.value.Description, Price: this.newItem.value.Price}];
    this.mergeData(this.products, obj);
  }
}
