import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './shared.component';
import { RouteComponent } from './routes/route-plugin.component';
import { RoutesComponent } from './routes/routes.component';

const sharedComponents = [SharedComponent, RouteComponent, RoutesComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...sharedComponents],
  exports: [...sharedComponents]
})
export class SharedModule {}
