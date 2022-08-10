import { Component, Inject, OnInit } from '@angular/core';
import { ThemeManagerInterface, ThemeType } from '../../domain/app/manager/theme.manager.interface';
import { ThemeManager } from '../../infrastructure/manager/theme.manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly _themeManager: ThemeManagerInterface;
  private _currentTheme: ThemeType | null;
  private _body: HTMLElement | null;

  constructor(
    @Inject(ThemeManager) themeManager: ThemeManagerInterface
  ) {
    this._themeManager = themeManager;
    this._currentTheme = 'light';
    this._body = null;
  }

  ngOnInit(): void {
    // Get html template body element
    this._body = (document.querySelector('body') as HTMLElement);
    // Set current theme from localStorage. If there is no stored data, set light as default value;
    this._themeManager.setTheme(this._body, localStorage.getItem('theme') as ThemeType || 'light');
    // Subscribe to the theme observable to get current theme when it changes;
    this._themeManager.theme.subscribe((theme: ThemeType) => this._currentTheme = theme);
  }

  switchTheme(): void {
    const newThemeValue = this._currentTheme === 'light' ? 'dark' : 'light';
    if (this._body) { this._themeManager.setTheme(this._body, newThemeValue); }
  }

  get currentTheme(): ThemeType | null {
    return this._currentTheme;
  }
}
