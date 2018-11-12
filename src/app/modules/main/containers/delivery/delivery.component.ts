import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {slideInDownAnimation} from '../../../../animations';
import {FirebaseService} from '../../../../core/services/firebase.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
  animations: [slideInDownAnimation]
})
export class DeliveryComponent implements OnInit {
  correctWidth;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  @HostListener('window:resize') onResize() {
    this.correctWidth = window.innerWidth < 786;
  }

  constructor(public fbservice: FirebaseService, private title: Title) {
    this.title.setTitle('ПП"Рефакт" | Доставка та оплата');
  }

  ngOnInit() {

  }

}
