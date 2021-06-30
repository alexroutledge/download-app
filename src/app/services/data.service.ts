import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

enum Status {
  scheduled,
  available
}

export interface Download {
  name: string;
  device: string;
  path: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getAll(): Observable<Download[]> {
    return of([{
        name: 'smss.exe',
        device: 'Stark',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
        status: 'scheduled'
      },
      {
          name: 'netsh.exe',
          device: 'Targaryen',
          path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
          status: 'available'
      },
      {
          name: 'uxtheme.dll',
          device: 'Lannister',
          path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
          status: 'available'
      },
      {
          name: 'cryptbase.dll',
          device: 'Martell',
          path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
          status: 'scheduled'
      },
      {
          name: '7za.exe',
          device: 'Baratheon',
          path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
          status: 'scheduled'
      }
    ])
    .pipe(
      // mimic HTTP latency
      delay(500)
    );
  }

}
