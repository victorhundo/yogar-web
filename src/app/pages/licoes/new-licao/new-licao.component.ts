import { Component, OnInit } from '@angular/core';
import { LicoesService } from './../licoes.service';
import { AuthService } from '../../login/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-licao',
  templateUrl: './new-licao.component.html',
  styleUrls: ['./new-licao.component.css']
})
export class NewLicaoComponent implements OnInit {

  licaoForm: FormGroup;
  sucessoFlag = false;

  constructor(private licaoService: LicoesService,
              private auth: AuthService,
              private httpClient: HttpClient) { }

  ngOnInit() {
    //this.uploadForm = this.formBuilder.group({ titulo: [''], texto: [''], file: [null] })

    this.licaoForm = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      nivel: new FormControl('', [Validators.required]),
      recompensa: new FormControl('', [Validators.required]),
      ehPremium: new FormControl('', [Validators.required]),
      tag: new FormControl('', [Validators.required]),
      descricao: new FormControl('', Validators.required),
      theFile: new FormControl(null,Validators.required)

    });
  }

  onFileSelect( event) {
    console.log( this.licaoForm.get('theFile'));
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.licaoForm.get('theFile').setValue(file);
      console.log( this.licaoForm.get('theFile').value)
    }
  }

  onSubmit() {

    const formData = new FormData();

    formData.append('titulo', this.licaoForm.get('titulo').value);
    formData.append('nivel', this.licaoForm.get('nivel').value);
    formData.append('recompensa', this.licaoForm.get('recompensa').value);
    formData.append('ehPremium', this.licaoForm.get('ehPremium').value);
    formData.append('tag', this.licaoForm.get('tag').value);
    formData.append('descricao', this.licaoForm.get('descricao').value);
    formData.append('theFile', this.licaoForm.get('theFile').value);



    this.licaoService.submit(formData).subscribe( result => {
      console.log(result);
      this.sucessoFlag = true;
      this.licaoForm.reset();
    });
  }

}
