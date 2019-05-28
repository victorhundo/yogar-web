import { AuthService } from './../../login/auth.service';
import { FeedService } from './../feed.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  post: Post = new Post();
  postAddFlag = false;
  uploadForm: FormGroup;


  constructor(private feddService: FeedService,
              private auth: AuthService,
              private formBuilder: FormBuilder,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({ titulo: [''], texto: [''], file: [null] })
    this.post.uuidProfessor = this.auth.user.id;
  }

  onFileSelect(event) {
    console.log( Object.getOwnPropertyNames(this.uploadForm.value.titulo))
    console.log( this.uploadForm.controls['titulo'].value)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.controls.file.value = file;
    }
  }

  onSubmit(){

    const formData = new FormData();
    formData.append('theFile', this.uploadForm.controls.file.value);
    formData.append('titulo', 'this.Post.titul');
    formData.append('texto', 'this.Post.texto');

    this.feddService.submit(formData).subscribe( result =>{
      console.log(result);
      this.postAddFlag = true;
    });
  }
}
