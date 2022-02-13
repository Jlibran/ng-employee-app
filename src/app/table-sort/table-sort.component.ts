import {Component, QueryList, ViewChildren} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {Observable} from 'rxjs';
import { EmployeeService } from '../employee.service'; 
import { Employee } from '../employee'; 
import { NgbdSortableHeader,SortEvent } from '../sortable.directive'; 

@Component({
  selector: 'app-table-sort',
  templateUrl: './table-sort.component.html',
  styleUrls: ['./table-sort.component.css'],
  providers: [EmployeeService, DecimalPipe]

})
export class TableSortComponent {
  employees$: Observable<Employee[]>;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: EmployeeService) {
    this.employees$ = service.employees$;
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
