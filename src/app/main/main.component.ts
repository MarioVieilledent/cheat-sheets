import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  THEME_LOCAL_STORAGE = 'theme';
  CATEGORY_LOCAL_STORAGE = 'category';
  LANGUAGE_LOCAL_STORAGE = 'language';

  appTheme: Theme = 'light';

  categories: string[] = [
    'Info',
    'Basics',
    'Variables_and_types',
    'Operands_and_conditions',
    'Arrays_and_maps',
    'Iterating',
    'Classes_or_structures',
    'Random',
    'JSON',
    'Concurrency',
    'HTTP'
  ];

  selectedCategory: string = this.categories[0];

  languages: Dictionary = {};

  selectedLanguage = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // LocalStorage
    const th = window.localStorage.getItem(this.THEME_LOCAL_STORAGE);
    th ? this.appTheme = th as Theme : {};
    const ct = window.localStorage.getItem(this.CATEGORY_LOCAL_STORAGE);
    ct ? this.selectedCategory = ct : {};
    const lg = window.localStorage.getItem(this.LANGUAGE_LOCAL_STORAGE);
    lg ? this.selectedLanguage = lg : {};

    this.http.get('./assets/languages.json').subscribe((data: any) => {
      this.languages = data;
    });

    // Themes
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.appTheme = event.matches ? 'dark' : 'light';
    });
  }

  /**
   * Set the category selected and put it in localStorage
   */
  selectCategory(category: string): void {
    window.localStorage.setItem(this.CATEGORY_LOCAL_STORAGE, category)
    this.selectedCategory = category;
  }

  /**
   * Set the language selected and put it in localStorage
   */
  selectLanguage(language: string): void {
    window.localStorage.setItem(this.LANGUAGE_LOCAL_STORAGE, language)
    this.selectedLanguage = language;
  }

  /**
   * Set the theme selected and put it in localStorage
   */
  setAppTheme(theme: Theme): void {
    window.localStorage.setItem(this.THEME_LOCAL_STORAGE, theme)
    this.appTheme = theme;
  }

  onLoad(event: any): void {

  }

  onError(event: any): void {

  }

}

type Theme = 'light' | 'dark';

interface Dictionary {
  [id: string]: Language;
}

interface Language {
  logo: string;
  info: Info;
}

interface Info {
  name: string;
  paradigm: string;
  designedBy: string[];
  developer: string;
  firstAppeard: string;
  typing: string;
  websites: string[];
}