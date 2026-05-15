import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { CatalogStore } from '../../../application/catalog-store';
import { PageShell } from '../../../../shared/presentation/components/page-shell/page-shell';

@Component({
  selector: 'app-type-list',
  imports: [MatTableModule, MatButtonModule, MatIconModule, TranslatePipe, PageShell],
  templateUrl: './type-list.html',
  styleUrl: './type-list.css',
})
export class TypeList {
  readonly store = inject(CatalogStore);
  protected router = inject(Router);

  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];

  editType(id: number) {
    this.router.navigate(['catalog/types/edit', id]).then();
  }

  deleteType(id: number) {
    this.store.deleteType(id);
  }
}
