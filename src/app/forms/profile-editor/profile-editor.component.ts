import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  /*
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({ // Se pueden anidar nuevos grupos de controles del formulario, cuando tengan una relación coherente
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  */
  profileForm = this.fb.group({ // Otra forma de declarar lo anterior es mediante el proveedor FormBuilder
    firstName: ['',  Validators.required], // Las comillas simples indican el valor inicial. Hace que sea requerido el control
    lastName: [''],
    age: [''],
    address: this.fb.group({ // Se pueden anidar nuevos grupos de controles del formulario, cuando tengan una relación coherente
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      /*this.fb.control('')*/
    ])
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({ // Actualiza las propiedaades que están definidas en el FormGroup
      firstName: 'Pedro',
      address: {
        state: 'Veracruz',
        street: 'C. 24 de Febrero'
      },
      age: "2"
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
