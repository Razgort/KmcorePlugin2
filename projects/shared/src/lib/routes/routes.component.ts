import { Component, EventEmitter, Output } from '@angular/core';
import { Route } from './routes.interface';
import {RouteConfig}  from './route-config'

@Component({
  selector: 'shared-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent {
  routes: Route[] = [];

  @Output() selected = new EventEmitter();

  addRoute(routeComponent: Route) {
    if (!this.routes.length) {
      routeComponent.hidden = false;
    }
    this.routes.push(routeComponent);
  }

  selectRoute(routeComponent: Route) {
    this.routes.map(route => (route.hidden = true));
    routeComponent.hidden = false;
    this.selected.emit(routeComponent);
  }
}
