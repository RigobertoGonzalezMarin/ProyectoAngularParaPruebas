import { AfterViewInit, Component, ContentChild, OnInit } from '@angular/core';
import { DirectivaContentDirective } from '../directives/directiva-content.directive';

@Component({
  selector: 'app-content-projection-ng-content',
  templateUrl: './content-projection-ng-content.component.html',
  styleUrls: ['./content-projection-ng-content.component.scss']
})
export class ContentProjectionNgContentComponent implements OnInit, AfterViewInit {

  @ContentChild(DirectivaContentDirective) content!: DirectivaContentDirective;
  expanded = false;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.expanded = true;
    }, 5000)
  }

}
