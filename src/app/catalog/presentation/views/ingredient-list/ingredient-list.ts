import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { CatalogStore } from '../../../application/catalog-store';
import { PageShell } from '../../../../shared/presentation/components/page-shell/page-shell';

@Component({
  selector: 'app-ingredient-list',
  imports: [MatTableModule, MatButtonModule, MatIconModule, TranslatePipe, PageShell],
  templateUrl: './ingredient-list.html',
  styleUrl: './ingredient-list.css',
})
export class IngredientList {
  readonly store = inject(CatalogStore);
  protected router = inject(Router);

  displayedColumns: string[] = ['id', 'name', 'category', 'nutrient', 'actions'];

  editIngredient(id: number) {
    this.router.navigate(['catalog/ingredients/edit', id]).then();
  }

  deleteIngredient(id: number) {
    this.store.deleteIngredient(id);
  }
}
