import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Show } from 'src/app/models/show.interface';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowItemComponent {
  @Input() item!: Show;
  @Output() select: EventEmitter<string> = new EventEmitter<string>();
}

@NgModule({
  declarations: [ShowItemComponent],
  exports: [ShowItemComponent],
  imports: [CommonModule, RouterModule],
})
export class ShowItemModule {}
