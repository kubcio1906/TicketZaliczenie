import { Directive, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Directive()
export class BaseComponent implements OnDestroy {
  protected readonly _destroyed = new Subject<void>();

  constructor() {}

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  protected _resetFormGroup(formGroup: FormGroup): void {
    formGroup.reset();

    Object.keys(formGroup.controls).forEach((key) => {
      formGroup.get(key)?.setErrors(null);
    });
  }
}
