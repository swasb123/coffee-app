import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { CoffeState } from '../store/reducers/coffee.reducer';
import { coffeeSelector } from '../store/selector/coffee.selector';
import { Subject, takeUntil } from 'rxjs';
import { Coffee } from '../models/coffee.model';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent implements OnInit, OnDestroy {
  coffeeData$: any = [];
  displayedColumns = [
    'id',
    'blend_name',
    'origin',
    'variety',
    'notes',
    'intensifier',
  ];
  dataSource: MatTableDataSource<Coffee> = new MatTableDataSource<Coffee>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;

  subject = new Subject();

  constructor(private store: Store<CoffeState>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(coffeeSelector))
      .pipe(takeUntil(this.subject))
      .subscribe((data) => {
        this.coffeeData$ = data;
        this.dataSource = new MatTableDataSource<Coffee>(this.coffeeData$);
        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }
      });
  }

  ngOnDestroy(): void {
    this.subject.next(null);
  }
}
