import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { CatalogStore } from '../../../application/catalog-store';
import { Nutrient } from '../../../domain/model/nutrient.entity';
import { PageShell } from '../../../../shared/presentation/components/page-shell/page-shell';

@Component({
  selector: 'app-nutrient-form',
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
  templateUrl: './nutrient-form.html',
  styleUrl: './nutrient-form.css',
})
export class NutrientForm {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(CatalogStore);

  form = this.fb.group({
    calories: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required, Validators.min(0)] }),
    carbs: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required, Validators.min(0)] }),
    proteins: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required, Validators.min(0)] }),
    fats: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required, Validators.min(0)] }),
  });
  isEdit = false;
  nutrientId: number | null = null;

  constructor() {
    this.route.params.subscribe((params) => {
      this.nutrientId = params['id'] ? +params['id'] : null;
      this.isEdit = !!this.nutrientId;
      if (this.isEdit) {
        const nutrient = this.store.getNutrientById(this.nutrientId)();
        if (nutrient) {
          this.form.patchValue({
            calories: nutrient.calories,
            carbs: nutrient.carbs,
            proteins: nutrient.proteins,
            fats: nutrient.fats,
          });
        }
      }
    });
  }

  submit() {
    if (this.form.invalid) return;

    const nutrient = new Nutrient({
      id: this.nutrientId ?? 0,
      calories: this.form.value.calories!,
      carbs: this.form.value.carbs!,
      proteins: this.form.value.proteins!,
      fats: this.form.value.fats!,
    });

    if (this.isEdit) {
      this.store.updateNutrient(nutrient);
    } else {
      this.store.addNutrient(nutrient);
    }

    this.router.navigate(['catalog/nutrients']).then();
  }
}
