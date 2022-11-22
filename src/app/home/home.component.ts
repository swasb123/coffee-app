import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCoffee } from '../store/actions/coffee.action';
import { CoffeState } from '../store/reducers/coffee.reducer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store<CoffeState>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllCoffees();
    this.cdr.detectChanges();
  }

  getAllCoffees() {
    this.store.dispatch(getCoffee());
  }
}
