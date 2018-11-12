import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireDatabaseModule} from 'angularfire2/database';
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
import {ClickOutsideModule} from 'ng-click-outside';
import {AngularFireFunctionsModule} from 'angularfire2/functions';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './modules/main/components/contact-form/contact-form.component';
import {Title} from '@angular/platform-browser';

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
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        AngularFireFunctionsModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        AppRoutingModule,
        ClickOutsideModule,
        ReactiveFormsModule
    ],
    providers: [FirebaseService, Title],
    bootstrap: [AppComponent]
})
export class AppModule {
}
