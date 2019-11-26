import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './modules/main/components/header/header.component';
import {HomepageComponent} from './modules/main/containers/homepage/homepage.component';
import {DeliveryComponent} from './modules/main/containers/delivery/delivery.component';
import {ContactsComponent} from './modules/main/containers/contacts/contacts.component';
import {FirebaseService} from './core/services/firebase.service';
import {ClickOutsideModule} from 'ng-click-outside';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactFormComponent} from './modules/main/components/contact-form/contact-form.component';
import 'hammerjs';
import 'mousetrap';
import {GalleryModule} from '@ks89/angular-modal-gallery';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MapModule} from 'angular-maps';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    DeliveryComponent,
    ContactsComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    GalleryModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    ClickOutsideModule,
    ReactiveFormsModule,
    MapModule.forRootBing()
  ],
  providers: [FirebaseService, Title, ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

