import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {finalize} from "rxjs/operators";
import {formatDate} from "@angular/common";
import {AngularFireStorage} from "@angular/fire/storage";
import {FirebaseService} from "../firebase/firebase.service";
import {Router} from "@angular/router";
import {Product} from "../class/product";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  title = 'firebase';
  selectedFile: File = null;
  products :Product[];
  downloadURL: Observable<string>;
  productForm = new FormGroup({
    name: new FormControl(),
    img: new FormControl(),
    price: new FormControl()
  });
  constructor(private storage: AngularFireStorage, private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.firebaseService.getAllProduct().subscribe(
      value => this.products = value
    );
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    const nameImg = this.getCurrentDateTime() + file;
    const filePath = `product/${nameImg}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`product/${nameImg}`, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          this.productForm.patchValue({img:url})
        });
      })).subscribe(url => {
          console.log(url);
      });
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }

  save() {
    this.firebaseService.create(this.productForm.value).subscribe(
      value => {},
      error => {},
      () => {this.ngOnInit()})
    this.router.navigateByUrl("/list")
  }

}

