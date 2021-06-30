import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Download } from './../services/data.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items$: Observable<Download[]>;
  dataSource = new MatTableDataSource<Download[]>();
  selection = new SelectionModel<Download>(true, []);

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.items$ = this.dataService.getAll();
  }

}
