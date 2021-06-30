import { Component, Input, OnInit } from '@angular/core';
import { IconService } from './../services/icon.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() status: string;
  icon: string;
  color: string;

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.icon = this.iconService.getIcon(this.status);
    this.color = this.iconService.getColor(this.status);
  }

}
