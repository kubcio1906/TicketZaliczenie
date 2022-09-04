import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { defer, Observable, Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import { BuyBody } from 'src/app/models/buy-body';
import { TicketOption } from 'src/app/models/ticket-option';
import { ApiService } from 'src/app/services/api.service';
import { Event } from '../../models/event';

@Component({
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventPage implements OnDestroy {
  protected readonly _destroyed = new Subject<void>();
  readonly event$: Observable<Event> = defer(() =>
    this._apiService.event$(this._route.snapshot.params['eventId'])
  );

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _apiService: ApiService
  ) {}

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  trackTicketOptionById(index: number, ticketOption: TicketOption): string {
    return ticketOption.id;
  }

  placeOrder(id: string): void {
    this._apiService
      .buy$(<BuyBody>{ ticketId: id })
      .pipe(
        take(1),
        takeUntil(this._destroyed),
        tap(() => {
          alert('Ticket bought!');
        })
      )
      .subscribe();
  }
}

const routes: Routes = [
  {
    path: ':eventId/details',
    component: EventPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  declarations: [EventPage],
})
export class EventModule {}
