import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import { Employee } from './employee'; 
import { EMPLOYEES } from './employees'; 
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortColumn, SortDirection} from './sortable.directive';

interface SearchResult {
  employees: Employee[];
}

interface State {
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(employees: Employee[], column: SortColumn, direction: string): Employee[] {
  if (direction === '' || column === '') {
    return employees;
  } else {
    return [...employees].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _employees$ = new BehaviorSubject<Employee[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._employees$.next(result.employees);
    });

    this._search$.next();
  }

  get employees$() { return this._employees$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }

  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection} = this._state;

    let employees = sort(EMPLOYEES, sortColumn, sortDirection);
    return of({employees});
  }
}

