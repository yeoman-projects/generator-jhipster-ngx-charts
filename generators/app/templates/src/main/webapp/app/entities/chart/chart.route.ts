import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IChart, Chart } from 'app/shared/model/chart-model';
import { ChartService } from './chart.service';

import { ChartComponent } from './chart.component';

@Injectable({ providedIn: 'root' })
export class ChartResolve implements Resolve<IChart> {
  constructor(private service: ChartService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IChart> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((chart: HttpResponse<Chart>) => chart.body));
    }
    return of(new Chart());
  }
}

export const chartRoute: Routes = [
  {
    path: ':id',
    component: ChartComponent,
    resolve: {
      chart: ChartResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'chartApp.chart.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
