import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { CatalogStore } from '../../../application/catalog-store';
import { Category } from '../../../domain/model/category.entity';
import { PageShell } from '../../../../shared/presentation/components/page-shell/page-shell';

@Component({
  selector: 'app-category-form',
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
  templateUrl: './category-form.html',
  styleUrl: './category-form.css',
})
export class CategoryForm {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(CatalogStore);

  form = this.fb.group({
    name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  });
  isEdit = false;
  categoryId: number | null = null;

  constructor() {
    this.route.params.subscribe((params) => {
      this.categoryId = params['id'] ? +params['id'] : null;
      this.isEdit = !!this.categoryId;
      if (this.isEdit) {
        const category = this.store.getCategoryById(this.categoryId)();
        if (category) {
          this.form.patchValue({ name: category.name });
        }
      }
    });
  }

  submit() {
    if (this.form.invalid) return;

    const category: Category = new Category({
      id: this.categoryId ?? 0,
      name: this.form.value.name!,
    });

    if (this.isEdit) {
      this.store.updateCategory(category);
    } else {
      this.store.addCategory(category);
    }

    this.router.navigate(['catalog/categories']).then();
  }
}
