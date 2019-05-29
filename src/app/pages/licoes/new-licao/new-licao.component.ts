import { Component, OnInit } from '@angular/core';
import { LicoesService } from './../licoes.service';
import { AuthService } from '../../login/auth.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-licao',
  templateUrl: './new-licao.component.html',
  styleUrls: ['./new-licao.component.css']
})
export class NewLicaoComponent implements OnInit {

  uploadForm: FormGroup;

  constructor(private licaoService: LicoesService,
              private auth: AuthService,
              private formBuilder: FormBuilder,
              private httpClient: HttpClient) { }

  ngOnInit() {
    //this.uploadForm = this.formBuilder.group({ titulo: [''], texto: [''], file: [null] })
    this.uploadForm = new FormGroup({
      titulo: new FormControl(''),
      descricao: new FormControl(''),
      nivel: new FormControl(''),
      recompensa: new FormControl(''),
      ehPremium: new FormControl(''),
      tag: new FormControl(''),
      theFile: new FormControl(null)
    });
  }

  onFileSelect( event) {
    console.log( this.uploadForm.get('theFile'))
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('theFile').setValue(file);
      console.log( this.uploadForm.get('theFile').value)
    }
  }

  onSubmit() {

    const formData = new FormData();
    formData.append('theFile', this.uploadForm.get('theFile').value);
    formData.append('titulo', this.uploadForm.get('titulo').value);
    formData.append('descricao', this.uploadForm.get('descricao').value);
    formData.append('nivel', this.uploadForm.get('nivel').value);
    formData.append('recompensa', this.uploadForm.get('recompensa').value);
    formData.append('ehPremium', this.uploadForm.get('ehPremium').value);
    formData.append('tag', this.uploadForm.get('tag').value);



    this.licaoService.submit(formData).subscribe( result =>{
      console.log(result);
      alert('Lição Publicado com Sucesso');
    });
  }

}
