import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-template-based-form',
  templateUrl: './template-based-form.component.html',
  styleUrls: ['./template-based-form.component.scss']
})
export class TemplateBasedFormComponent implements OnInit, AfterViewInit {

  @ViewChild('miCheckbox') miCheckbox!: ElementRef;

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, '', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  form = this.fb.group({
    valor: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.miCheckbox.nativeElement.checked = true;
  }

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

}
