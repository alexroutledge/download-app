import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  getIcon(status: string): string {
    const statuses = {
      available: 'done',
      scheduled: 'block',
      download: 'download'
    }
    return statuses[status];
  }

  getColor(status: string): string {
    const colors = {
      available: 'primary',
      scheduled: 'warn',
      download: 'primary'
    }
    return colors[status];
  }
}
