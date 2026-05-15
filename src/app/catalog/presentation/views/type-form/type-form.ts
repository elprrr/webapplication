import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { CatalogStore } from '../../../application/catalog-store';
import { Type } from '../../../domain/model/type.entity';
import { PageShell } from '../../../../shared/presentation/components/page-shell/page-shell';

@Component({
  selector: 'app-type-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterLink,
    TranslatePipe,
    PageShell,
  ],
  templateUrl: './type-form.html',
  styleUrl: './type-form.css',
})
export class TypeForm {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(CatalogStore);

  form = this.fb.group({
    name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl<string>('', { nonNullable: true }),
  });
  isEdit = false;
  typeId: number | null = null;

  constructor() {
    this.route.params.subscribe((params) => {
      this.typeId = params['id'] ? +params['id'] : null;
      this.isEdit = !!this.typeId;
      if (this.isEdit) {
        const type = this.store.getTypeById(this.typeId)();
        if (type) {
          this.form.patchValue({ name: type.name, description: type.description });
        }
      }
    });
  }

  submit() {
    if (this.form.invalid) return;

    const type = new Type({
      id: this.typeId ?? 0,
      name: this.form.value.name!,
      description: this.form.value.description!,
    });

    if (this.isEdit) {
      this.store.updateType(type);
    } else {
      this.store.addType(type);
    }

    this.router.navigate(['catalog/types']).then();
  }
}
