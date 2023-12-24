import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../actions/counter.actions';
import * as fromCustomers from '../../selectors/selectors';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  count$!: Observable<number>;

  constructor(
    private readonly store: Store
  ) { 
    // this.count$ = store.select<number>(fromCustomers.selectFeature);
  }

  ngOnInit(): void {
    
  }

  increment() {
    this.store.dispatch(increment({u: ''}));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
