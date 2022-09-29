import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {


  formBook:FormGroup;
  bookName:FormControl;
  bookAuthor:FormControl;
  bookQtty:FormControl;
  bookPrice:FormControl;
  bookCover:FormControl;


  constructor(private fb: FormBuilder) {
    this.bookName = fb.control("",[Validators.required,Validators.minLength(3)])
    this.bookAuthor = fb.control("",[Validators.required,Validators.minLength(3)])
    this.bookQtty = fb.control(1,[Validators.required,Validators.min(1)])
    this.bookPrice = fb.control(1,[Validators.required,Validators.min(1)])
    this.bookCover = fb.control("",Validators.required)

    this.formBook = fb.group({
      name:this.bookName,
      author:this.bookAuthor,
      qtty:this.bookQtty,
      price:this.bookPrice,
      cover:this.bookCover
    })
  }




  ngOnInit(): void {
  }

}
