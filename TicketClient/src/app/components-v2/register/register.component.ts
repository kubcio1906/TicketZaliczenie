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

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class Register {
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

  submit(): void {
    if (!this.register.valid) {
      return;
    }

    console.log('hello');
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
