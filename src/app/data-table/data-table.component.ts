import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Download } from './../services/data.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './../dialog/dialog.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent {
  @Input() data: Download[];
  selection = new SelectionModel<Download>(true, []);

  constructor(private dialog: MatDialog) {}

  isAllSelected(): boolean {
    const filteredItems = this.data.filter(({status}) => status === 'available');
    const numSelected = this.selection.selected.length;
    const numRows = filteredItems.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    const allSelected = this.isAllSelected();
    const availableItems = this.data.filter(({status}) => status === 'available');
    if (allSelected) {
      this.selection.clear()
    } else {
      availableItems.forEach(row => this.selection.select(row))
    }
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '50%',
      data: this.selection.selected
    });
  }

}