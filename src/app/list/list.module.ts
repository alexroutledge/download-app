import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from './../services/data.service';
import { DataTableModule } from './../data-table/data-table.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTableModule,
    MatProgressBarModule
  ],
  exports: [ListComponent],
  providers: [DataService]
})
export class ListModule { }
