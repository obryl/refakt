import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../../../animations';
import {FirebaseService} from '../../../../core/services/firebase.service';
import {Title} from '@angular/platform-browser';
import {BingMapAPILoader, BingMapAPILoaderConfig, DocumentRef, WindowRef} from 'angular-maps';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [slideInDownAnimation]
})
export class ContactsComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor(private fbservice: FirebaseService, private title: Title) {
    this.title.setTitle('ПП "Рефакт" | Контактні дані та зворотній зв\'язок');
  }

  map = new BingMapAPILoader(new BingMapAPILoaderConfig(), new WindowRef(), new DocumentRef());
  mapstyle = {
    'version': '1.0',
    'settings': {
      'landColor': '#0B334D'
    },
    'elements': {
      'mapElement': {
        'labelColor': '#FFFFFF',
        'labelOutlineColor': '#000000'
      },
      'political': {
        'borderStrokeColor': '#144B53',
        'borderOutlineColor': '#00000000'
      },
      'point': {
        'iconColor': '#0C4152',
        'fillColor': '#000000',
        'strokeColor': '#0C4152'
      },
      'transportation': {
        'strokeColor': '#814100',
        'fillColor': '#000000'
      },
      'highway': {
        'strokeColor': '#f9a34e',
        'fillColor': '#000000'
      },
      'controlledAccessHighway': {
        'strokeColor': '#f9a34e',
        'fillColor': '#000000'
      },
      'arterialRoad': {
        'strokeColor': '#814100',
        'fillColor': '#000000'
      },
      'majorRoad': {
        'strokeColor': '#814100',
        'fillColor': '#000000'
      },
      'railway': {
        'strokeColor': '#f9a34e',
        'fillColor': '#000000'
      },
      'structure': {
        'fillColor': '#115166'
      },
      'water': {
        'fillColor': '#021019'
      },
      'area': {
        'fillColor': '#115166'
      }
    }
  };
  infowindow;

  ngOnInit() {
    this.map.Load().then(() => {
      const map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AqCIyFA14hD94mDpgVJzmHyOCICmAgVosINXTsapJKUZWEGErVnczuBfqkMZtEPt',
        customMapStyle: this.mapstyle
      });
      map.setView({
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        center: new Microsoft.Maps.Location(48.922483, 24.715128),
        zoom: 17
      });
      const center = map.getCenter();

      // Create custom Pushpin
      const pin = new Microsoft.Maps.Pushpin(center, {
        icon: 'assets/images/map-marker.png'
      });

      // Add the pushpin to the map
      map.entities.push(pin);
    });

  }

}
