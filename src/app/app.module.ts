import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from './sortable.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { TableSortComponent } from './table-sort/table-sort.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AddEmployeeButtonComponent } from './add-employee-button/add-employee-button.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdSortableHeader,
    TableSortComponent,
    BarChartComponent,
    PieChartComponent,
    AddEmployeeButtonComponent,
    DashboardComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  exports: [TableSortComponent ]
})
export class AppModule { }



