import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  RouterModule,
  Routes,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { DetailedShow } from 'src/app/models/detailed-show.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
  readonly detailedShow$: Observable<DetailedShow | undefined> =
    this.route.paramMap.pipe(
      mergeMap((params: ParamMap) =>
        this.apiService.getDetailedShow(params.get('eventId') as string)
      ),
      catchError((error) => {
        console.error(error);
        return of(undefined);
      })
    );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly apiService: ApiService
  ) {}
}

const routes: Routes = [
  { path: '', component: OrderComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [OrderComponent],
  exports: [OrderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrderModule {}
