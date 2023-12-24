import { AfterViewInit, Component, ContentChild, OnInit } from '@angular/core';
import { DirectivaContentDirective } from '../directives/directiva-content.directive';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-content-projection-ng-content',
  templateUrl: './content-projection-ng-content.component.html',
  styleUrls: ['./content-projection-ng-content.component.scss'],
})
export class ContentProjectionNgContentComponent implements OnInit, AfterViewInit {

  @ContentChild(DirectivaContentDirective) content!: DirectivaContentDirective;
  expanded = false;

  constructor(
    private testService: TestService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.expanded = true;
    }, 5000)
  }

  doRequest() {
    this.testService.doRequestApi().subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
