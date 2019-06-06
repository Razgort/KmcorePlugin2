import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Plugin3Component } from './plugin3.component';
import { SharedModule } from 'shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [Plugin1Component],
  entryComponents: [Plugin1Component]
})
export classPlugin3Module {
  static entry =Plugin3Component;
}
