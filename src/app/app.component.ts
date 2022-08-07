import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";
import {formatDate} from "@angular/common";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "./class/product";
import {FirebaseService} from "./firebase/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  ngOnInit() {

  }


}
