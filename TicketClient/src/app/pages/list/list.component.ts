import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/show.interface';
import { ApiService } from 'src/app/services/api.service';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class List {
  readonly shows$: Observable<Array<Show>> = this._apiService.getShows();

  constructor(private readonly _apiService: ApiService) {}

  trackById(index: number, show: Show): string {
    return show.id;
  }
}

const routes: Routes = [{ path: '', component: List, pathMatch: 'full' }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [List],
})
export class ListModule {}
