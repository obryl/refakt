import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {slideInDownAnimation} from '../../../../animations';
import {} from '@types/googlemaps';
import MapOptions = google.maps.MapOptions;
import {FirebaseService} from '../../../../core/services/firebase.service';
import {AngularFireFunctions} from 'angularfire2/functions';

const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCQEo-J310OGu7SJr-YiGDYxhS8c_IVzpg&language=uk&region=UA&callback=initialize';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
    animations: [slideInDownAnimation]
})
export class ContactsComponent implements OnInit {
    @ViewChild('googleMap') gmapElement: any;

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';

    constructor(private fbservice: FirebaseService) {
    }

    loadAPI: Promise<any>;
    map;
    infowindow;

    ngOnInit() {
        if (!this.fbservice.mapInit) {
            this.loadAPI = new Promise((resolve) => {
                this.loadScript();
                window['initialize'] = () => {
                    resolve(true);
                };
            });
            this.loadAPI.then(result => {
                if (result) {
                    this.initialize();
                    this.fbservice.mapInit = true;
                }
            });
        } else {
            this.initialize();
        }

    }

    loadScript() {
        const node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

    initialize() {
        const mapProp: MapOptions = {
            center: new google.maps.LatLng(48.922469, 24.715243),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            // mapTypeId: google.maps.MapTypeId.HYBRID,
            // mapTypeId: google.maps.MapTypeId.SATELLITE
            // mapTypeId: google.maps.MapTypeId.TERRAIN
            styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6b9a76'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}]
                }
            ]
        };

        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        const marker = new google.maps.Marker({
            position: mapProp.center,
            label: {
                text: 'ПП "РЕФАКТ"',
                color: '#f9a34e',
                fontWeight: 'bold',
                fontSize: '14px',
            },
            animation: google.maps.Animation.DROP,
            icon: {
                url: '/assets/images/map-marker.png',
                size: new google.maps.Size(25, 42),
                labelOrigin: new google.maps.Point(15, 55)
            }

        });
        const openMarker = () => {
            this.infowindow.open(this.map, marker);
        };
        marker.setMap(this.map);
        const contentString = `<p style="color:#222c35">ПП "РЕФАКТ"<br/>Івано-Франківськ,<br/>вул. Грушевського, 22А</p>`;
        this.infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        marker.addListener('click', openMarker);
    }
}
