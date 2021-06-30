import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Download } from './../services/data.service';

@Component({
  selector: 'app-download-summary',
  templateUrl: './download-summary.component.html',
  styleUrls: ['./download-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadSummaryComponent {
  @Input() data: Download[];
}
