import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { CatalogStore } from '../../../application/catalog-store';
import { PageShell } from '../../../../shared/presentation/components/page-shell/page-shell';

@Component({
  selector: 'app-recipe-list',
  imports: [MatTableModule, MatButtonModule, MatIconModule, TranslatePipe, PageShell],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  readonly store = inject(CatalogStore);
  protected router = inject(Router);

  displayedColumns: string[] = ['id', 'title', 'description', 'recipeTypeId', 'totalNutrientsId', 'actions'];

  editRecipe(id: number) {
    this.router.navigate(['catalog/recipes/edit', id]).then();
  }

  deleteRecipe(id: number) {
    this.store.deleteRecipe(id);
  }
}
