import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  showOverlay: boolean = false;

  toggleOverlay(): void {
    this.showOverlay = !this.showOverlay;
  }
}
