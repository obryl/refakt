import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './components/main/main.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {AngularFireAuthModule} from '@angular/fire/auth';


@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, MainComponent, ProductDetailsComponent],
  providers: [AuthService]
})
export class AdminModule { }
