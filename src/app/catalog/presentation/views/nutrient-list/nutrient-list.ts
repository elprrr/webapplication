import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { CatalogStore } from '../../../application/catalog-store';
import { PageShell } from '../../../../shared/presentation/components/page-shell/page-shell';

@Component({
  selector: 'app-nutrient-list',
  imports: [MatTableModule, MatButtonModule, MatIconModule, TranslatePipe, PageShell],
  templateUrl: './nutrient-list.html',
  styleUrl: './nutrient-list.css',
})
export class NutrientList {
  readonly store = inject(CatalogStore);
  protected router = inject(Router);

  displayedColumns: string[] = ['id', 'calories', 'carbs', 'proteins', 'fats', 'actions'];

  editNutrient(id: number) {
    this.router.navigate(['catalog/nutrients/edit', id]).then();
  }

  deleteNutrient(id: number) {
    this.store.deleteNutrient(id);
  }
}
