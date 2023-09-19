import { AbstractControl, AsyncValidator, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, catchError, map, of } from 'rxjs';
import { ValidatorsServiceService } from "../services/validators-service.service";
import { Inject, Injectable } from "@angular/core";

// Validadores para uso de cada FormControl
export function nameNotAllowedValidator(nameNotAllowed: RegExp): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const isTrue = nameNotAllowed.test(control.value);
    return isTrue 
      ? { nameNotAllowed: {value: control.value} }
      : null;
  }

}

// Validadores para uso de todo el FormGroup
export const duplicateNameValidator: ValidatorFn = 
  (control: AbstractControl): ValidationErrors | null => {
  // Como el contrl es un FormGroup se puede obtener todos los FormControl
  const nameControl = control.get('name');
  const otherNameControl = control.get('otherName');

  return nameControl?.value === otherNameControl?.value
    ? { duplicateName: true }
    : null;

}

@Injectable({ providedIn: 'root' })
export class UniqueAliasValidator implements AsyncValidator {

  constructor(
    private validatorService: ValidatorsServiceService
  ){}

  validate(control: AbstractControl): Observable<ValidationErrors|null> {
    
    return this.validatorService.isNotAvailableAlias(control.value)
      .pipe(
        map(isAvailable => isAvailable ? { uniqueAlias: true } : null),
        catchError(() => of(null))
      );
    
  }

}