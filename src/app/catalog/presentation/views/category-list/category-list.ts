import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { CatalogStore } from '../../../application/catalog-store';
import { PageShell } from '../../../../shared/presentation/components/page-shell/page-shell';

@Component({
  selector: 'app-category-list',
  imports: [MatTableModule, MatButtonModule, MatIconModule, TranslatePipe, PageShell],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {
  readonly store = inject(CatalogStore);
  protected router = inject(Router);

  displayedColumns: string[] = ['id', 'name', 'actions'];

  editCategory(id: number) {
    this.router.navigate(['catalog/categories/edit', id]).then();
  }

  deleteCategory(id: number) {
    this.store.deleteCategory(id);
  }
}
