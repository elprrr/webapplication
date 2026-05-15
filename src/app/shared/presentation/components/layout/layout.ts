import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { FooterContent } from '../footer-content/footer-content';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatToolbar,
    MatButton,
    MatIconButton,
    MatIcon,
    RouterLinkActive,
    TranslatePipe,
    LanguageSwitcher,
    FooterContent,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  catalogOptions = [
    { link: '/catalog/recipes', label: 'option.recipes', icon: 'menu_book' },
    { link: '/catalog/ingredients', label: 'option.ingredients', icon: 'eco' },
    { link: '/catalog/categories', label: 'option.categories', icon: 'category' },
    { link: '/catalog/types', label: 'option.types', icon: 'style' },
    { link: '/catalog/nutrients', label: 'option.nutrients', icon: 'monitor_heart' },
    { link: '/catalog/ingredient-quantities', label: 'option.ingredientQuantities', icon: 'scale' },
  ];
}
