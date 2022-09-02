import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/show.interface';
import { ApiService } from 'src/app/services/api.service';
import { ShowItemModule } from '../show-item/show-item.component';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowListComponent {
  readonly shows$: Observable<Array<Show>> = this.apiService.getShows();

  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {}

  trackById(index: number, show: Show): string {
    return show.id;
  }

  routeToElement(id: string): void {
    if (!id) {
      return;
    }

    this.router.navigate([`/event/${id}`]);
  }
}

const routes: Routes = [
  { path: '', component: ShowListComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [ShowListComponent],
  exports: [ShowListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ShowItemModule],
})
export class ShowListModule {}
