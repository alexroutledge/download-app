import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from './icon.component';
import { IconService } from './../services/icon.service';

@NgModule({
  declarations: [IconComponent],
  providers: [IconService],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [IconComponent]
})
export class IconModule { }
