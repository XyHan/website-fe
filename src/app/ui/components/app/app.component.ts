import { Component, Inject, OnInit } from '@angular/core';
import { ThemeManagerInterface, ThemeType } from '../../../domain/app/manager/theme.manager.interface';
import { ThemeManager } from '../../../infrastructure/manager/theme.manager';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly _router: Router;
  private readonly _themeManager: ThemeManagerInterface;
  private _currentTheme: ThemeType | null;
  private _body: HTMLElement | null;
  private readonly _metaService: Meta;
  private readonly _titleService: Title;

  constructor(
    @Inject(Router) router: Router,
    @Inject(ThemeManager) themeManager: ThemeManagerInterface,
    @Inject(Meta) metaService: Meta,
    @Inject(Title) titleService: Title,
  ) {
    this._router = router;
    this._themeManager = themeManager;
    this._currentTheme = 'light';
    this._body = null;
    this._metaService = metaService;
    this._titleService = titleService;
  }

  ngOnInit(): void {
    this._titleService.setTitle('Robin CHEVALIER');
    this._metaService.updateTag({
      name: 'description',
      content: 'Robin CHEVALIER - Développeur web',
    });
    // Subscribe to the theme observable to get current theme when it changes;
    this._themeManager.theme.subscribe((theme: ThemeType) => this._currentTheme = theme);
  }

  switchTheme(): void {
    const newThemeValue = this.themeToSwitchWith();
    this._body = (document.querySelector('body') as HTMLElement);
    if (this._body) { this._themeManager.setTheme(this._body, newThemeValue); }
  }

  public themeToSwitchWith(): ThemeType {
    return this._currentTheme === 'light' ? 'dark' : 'light';
  }

  get router(): Router {
    return this._router;
  }
}
