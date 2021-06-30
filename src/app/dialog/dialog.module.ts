import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DownloadSummaryModule } from './../download-summary/download-summary.module';

@NgModule({
  entryComponents: [DialogComponent],
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    DownloadSummaryModule
  ],
  exports: [DialogComponent]
})
export class DialogModule { }
