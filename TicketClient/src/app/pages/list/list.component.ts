import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EventShort } from 'src/app/models/event-short';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListPage {
  readonly events$: Observable<Array<EventShort>> = this._apiService.events$();

  constructor(private readonly _apiService: ApiService) {}

  trackEventById(index: number, event: EventShort): string {
    return event.id;
  }
}

const routes: Routes = [{ path: '', component: ListPage, pathMatch: 'full' }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [ListPage],
})
export class ListModule {}
