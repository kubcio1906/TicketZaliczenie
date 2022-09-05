import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { take, takeUntil, tap } from 'rxjs/operators';
import { LoginBody } from 'src/app/models/login-body';
import { AuthService } from 'src/app/services/auth.service';
import { BaseComponent } from '../base-component.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class Login extends BaseComponent {
  passwordHide = true;
  readonly login: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {
    super();
  }

  submit(): void {
    if (!this.login.valid) {
      return;
    }

    this._authService
      .login(<LoginBody>{
        email: this.login.get('email')?.value,
        password: this.login.get('password')?.value,
      })
      .pipe(
        take(1),
        takeUntil(this._destroyed),
        tap(() => {
          this._resetFormGroup(this.login);
          this.passwordHide = true;
          this._router.navigate(['/list']);
        })
      )
      .subscribe();
  }
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [Login],
  exports: [Login],
})
export class LoginModule {}
