import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { FAKE_DESCRIPTION } from 'src/app/models/show.interface';

@Component({
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class Event {
  event = {
    show: {
      id: 'd071b2e5-bac2-4eb5-aa09-f8fa88c7d060',
      name: 'Jaś i Małgosia',
      url: 'https://ebilet-media.azureedge.net/media/47004/klf_2022_basic_ebilet_900x507450.jpg',
      description: FAKE_DESCRIPTION,
    },
    tickets: [
      {
        id: '',
        price: 60,
        date: Date.now(),
        place: {
          name: 'Teatr Kamienica',
          city: 'Warszawa',
        },
      },
      {
        id: '',
        price: 60,
        date: Date.now(),
        place: {
          name: 'Teatr Kamienica',
          city: 'Warszawa',
        },
      },
      {
        id: '',
        price: 60,
        date: Date.now(),
        place: {
          name: 'Teatr Kamienica',
          city: 'Warszawa',
        },
      },
    ],
  };

  constructor() {}
}

const routes: Routes = [
  {
    path: ':eventId/details',
    component: Event,
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
  declarations: [Event],
})
export class EventModule {}
