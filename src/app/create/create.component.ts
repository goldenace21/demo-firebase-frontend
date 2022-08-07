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
  fb;
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
      value => this.products = value,
      error => {},
      () => {}
    );
  }

  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
            this.fb = url;
          this.productForm.patchValue({img:url})
          console.log(this.fb);
        });
      })
    )
      .subscribe(url => {
          console.log(url);
      });
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
  showPreview(event: any) {
    this.selectedFile = event.target.files[0];
  }

  save() {
    // const nameImg = this.getCurrentDateTime() + this.selectedFile.name;
    // const fileRef = this.storage.ref(nameImg);
    //
    // this.storage.upload(nameImg, this.selectedFile).snapshotChanges().pipe(
    //   finalize(() => {
    //     fileRef.getDownloadURL().subscribe((url) => {
    //
    //       this.productForm.patchValue({img: url});
    //
    //       // Call API to create vaccine
    //       this.firebaseService.create(this.productForm.value).subscribe(
    //         value => {},
    //         error => {},
    //         () => this.ngOnInit(),
    //       )
    //     });
    //   })
    // ).subscribe();
    this.firebaseService.create(this.productForm.value).subscribe(
      value => {},
      error => {},
      () => {this.ngOnInit()})
    this.router.navigateByUrl("/list")
  }

}

