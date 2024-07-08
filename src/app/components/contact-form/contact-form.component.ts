import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit{
  contatoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.contatoForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]{9,11}$')]],
      tipo: ['', Validators.required],
      mensagem: ['', Validators.required, , Validators.minLength(10)]
    });
  }

  onSubmit(): void{
    // if (this.contatoForm.valid) {
    //   const formData: Contato = this.contatoForm.value;
    //   this.contatoService.enviarContato(formData).subscribe(response => {
    //     console.log('Formulário enviado com sucesso', response);
    //     // Lógica adicional para sucesso
    //   }, error => {
    //     console.error('Erro ao enviar formulário', error);
    //     // Lógica adicional para erro
    //   });
    // } else {
    //   console.log('Formulário inválido');
    //   // Lógica adicional para formulário inválido
    // }
  }
}
