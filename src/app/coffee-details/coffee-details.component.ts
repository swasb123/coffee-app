import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { CoffeState } from '../store/reducers/coffee.reducer';
import { coffeeDetails } from '../store/selector/coffee.selector';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css'],
})
export class CoffeeDetailsComponent implements OnInit, OnDestroy {
  coffeeId!: string | null;
  coffeeData$: any = {};
  subject = new Subject();
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<CoffeState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.coffeeId = param.get(`id`);
    });

    this.store
      .pipe(select(coffeeDetails(this.coffeeId)))
      .pipe(takeUntil(this.subject))
      .subscribe((data) => {
        this.coffeeData$ = data;
      });
  }

  ngOnDestroy(): void {
    this.subject.next(null);
  }

  homeRoute() {
    this.router.navigate([``]);
  }
}
