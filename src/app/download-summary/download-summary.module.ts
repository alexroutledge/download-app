import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadSummaryComponent } from './download-summary.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [DownloadSummaryComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [DownloadSummaryComponent]
})
export class DownloadSummaryModule { }
