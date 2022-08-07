import { Component, OnInit } from '@angular/core';
import {Product} from "../class/product";
import {Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/storage";
import {FirebaseService} from "./firebase.service";
import {finalize} from "rxjs/operators";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  products :Product[];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getAllProduct().subscribe(
      value => this.products = value,
      error => {},
      () => {}
    );
  }


}
