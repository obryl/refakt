import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {slideInDownAnimation} from '../../../../animations';
import {FirebaseService} from '../../../../core/services/firebase.service';
import {Title} from '@angular/platform-browser';
import {BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef} from 'angular-maps';
import {MapAPILoader} from 'angular-maps';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [slideInDownAnimation]
})
export class ContactsComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor(private fbservice: FirebaseService, private title: Title, private loader: MapAPILoader) {
    this.title.setTitle('ПП "Рефакт" | Контактні дані та зворотній зв\'язок');
  }

  map = new BingMapAPILoader(new BingMapAPILoaderConfig(), new WindowRef(), new DocumentRef());
  infowindow;

  ngOnInit() {
    this.map.Load().then(() => {
      const map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AqCIyFA14hD94mDpgVJzmHyOCICmAgVosINXTsapJKUZWEGErVnczuBfqkMZtEPt'
      });
      map.setView({
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        center: new Microsoft.Maps.Location(48.922483, 24.715128),
        zoom: 18
      });
      const center = map.getCenter();

      // Create custom Pushpin
      const pin = new Microsoft.Maps.Pushpin(center, {
        icon: 'assets/images/map-marker.png',
        title: 'ПП "РЕФАКТ"',
        subTitle: 'м. Івано-Франківськ, \n вул. Грушевського, 22А'
      });

      // Add the pushpin to the map
      map.entities.push(pin);
    });

  }

}
