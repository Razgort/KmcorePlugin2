import { Component, HostBinding, Input } from '@angular/core';
import { Route } from './routes.interface';
import { RoutesComponent } from './routes.component';
import * as  RouteConfig  from './routes-config.json';

@Component({
  selector: 'shared-route',
  template: '<ng-content></ng-content>'
})
export class RouteComponent implements Route {
  @Input() name: string;

  @Input() path: string;

  @HostBinding('hidden') hidden = true;

  constructor(routesComponent: RoutesComponent) {
  	console.log("test");
    routesComponent.addRoute(this);
  }
}
