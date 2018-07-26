import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './modules/main/components/header/header.component';
import {HomepageComponent} from './modules/main/containers/homepage/homepage.component';
import {DeliveryComponent} from './modules/main/containers/delivery/delivery.component';
import {ContactsComponent} from './modules/main/containers/contacts/contacts.component';
import {FirebaseService} from './core/services/firebase.service';
import {AngularFireStorageModule} from 'angularfire2/storage';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomepageComponent,
        DeliveryComponent,
        ContactsComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [FirebaseService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
