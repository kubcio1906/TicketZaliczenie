import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {}

@NgModule({
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  imports: [CommonModule],
})
export class RegisterModule {}
