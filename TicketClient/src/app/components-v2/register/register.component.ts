import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { of } from 'rxjs';
import { catchError, take, takeUntil, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { BaseComponent } from '../base-component.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class Register extends BaseComponent {
  // private readonly _destroyed = new Subject<void>();

  passwordHide = true;
  repeatPasswordHide = true;

  readonly register: FormGroup = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', Validators.required),
    },
    { validators: this._matchPassword }
  );

  constructor(private readonly _apiService: ApiService) {
    super();
  }

  // ngOnDestroy(): void {
  //   this._destroyed.next();
  //   this._destroyed.complete();
  // }

  submit(): void {
    if (!this.register.valid) {
      return;
    }

    this._apiService
      .createUser({
        userName: this.register.get('username')?.value,
        email: this.register.get('email')?.value,
        password: this.register.get('password')?.value,
      })
      .pipe(
        take(1),
        takeUntil(this._destroyed),
        tap(() => {
          this._resetFormGroup(this.register);
          this.passwordHide = this.repeatPasswordHide = true;

          alert('Registration was successful.');
        }),
        catchError((err) => {
          console.error(err);
          return of(err);
        })
      )
      .subscribe();
  }

  private _matchPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const repeat = control.get('repeatPassword')?.value;

    if (password !== repeat) {
      return { noMatch: true };
    }

    return null;
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
  declarations: [Register],
  exports: [Register],
})
export class RegisterModule {}
