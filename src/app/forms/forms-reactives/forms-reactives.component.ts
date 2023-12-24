import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { 
  duplicateNameValidator, 
  nameNotAllowedValidator,
  UniqueAliasValidator 
} from './validators/personalize-validation-form.directive';

@Component({
  selector: 'app-forms-reactives',
  templateUrl: './forms-reactives.component.html',
  styleUrls: ['./forms-reactives.component.scss']
})
export class FormsReactivesComponent implements OnInit {

  heroForm!: FormGroup; 
  heroFormCrossed!: FormGroup;
  campoPrueba: string = '';

  constructor(
    private fb: FormBuilder,
    private uniqueAliasValidator: UniqueAliasValidator
  ) { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl('', [
        Validators.required, 
        Validators.minLength(4),
        nameNotAllowedValidator(/falso/i)] // No permite el nombre de bob
      )
    });

    this.heroFormCrossed = new FormGroup({
      name: new FormControl(),
      otherName: new FormControl(),
      power: new FormControl(),
      // weaknesses = debilidades
      weaknesses: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9_-]{8,15}$")
      ]),
      alias: new FormControl('', {
        asyncValidators: [
          this.uniqueAliasValidator.validate.bind(this.uniqueAliasValidator)
        ],
        updateOn: 'blur'
      })
    }, { validators: duplicateNameValidator  }); // El validador se establece a todo el FormGroup
  }

  get name() { return this.heroForm.get('name')!; }

}
