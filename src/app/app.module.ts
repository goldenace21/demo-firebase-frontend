import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {HttpClientModule} from "@angular/common/http";
import { FirebaseComponent } from './firebase/firebase.component';
import {FirebaseService} from "./firebase/firebase.service";
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // import fireModule
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// AngularFireStorageModule,
  // AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
