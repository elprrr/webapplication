import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { CatalogStore } from '../../../application/catalog-store';
import { PageShell } from '../../../../shared/presentation/components/page-shell/page-shell';

@Component({
  selector: 'app-ingredient-quantity-list',
  imports: [MatTableModule, MatButtonModule, MatIconModule, TranslatePipe, PageShell],
  templateUrl: './ingredient-quantity-list.html',
  styleUrl: './ingredient-quantity-list.css',
})
export class IngredientQuantityList {
  readonly store = inject(CatalogStore);
  protected router = inject(Router);

  displayedColumns: string[] = ['id', 'recipe', 'ingredient', 'quantity', 'actions'];

  editIngredientQuantity(id: number) {
    this.router.navigate(['catalog/ingredient-quantities/edit', id]).then();
  }

  deleteIngredientQuantity(id: number) {
    this.store.deleteIngredientQuantity(id);
  }
}
