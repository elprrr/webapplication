import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-page-shell',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatProgressSpinner, TranslatePipe],
  templateUrl: './page-shell.html',
  styleUrl: './page-shell.css',
})
export class PageShell {
  title = input.required<string>();
  subtitle = input<string>('');
  loading = input(false);
  error = input<string | null>(null);
  addRoute = input<string>('');
  addLabel = input('common.add');
  backRoute = input<string>('');
}
