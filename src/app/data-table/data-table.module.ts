import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IconModule } from './../icon/icon.module';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from './../dialog/dialog.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    IconModule,
    MatButtonModule,
    DialogModule,
    MatProgressBarModule
  ],
  exports: [DataTableComponent]
})
export class DataTableModule { }