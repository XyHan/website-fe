import { ThemeManagerInterface, ThemeType } from '../../domain/app/manager/theme.manager.interface';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export const storageItemName = 'rc-website-theme';

@Injectable()
export class ThemeManager implements ThemeManagerInterface {
  private _theme: Subject<ThemeType>;

  constructor() {
    // window.localStorage.getItem(storageItemName) as ThemeType ||
    const storedTheme: ThemeType = 'light';
    this._theme = new Subject<ThemeType>();
    this._theme.next(storedTheme);
  }

  public setTheme(element: HTMLElement, theme: ThemeType): void {
    this._theme.next(theme);
    element.setAttribute('data-theme', theme);
    // window.localStorage.setItem(storageItemName, theme);
  }

  get theme(): Observable<ThemeType> {
    return this._theme.asObservable();
  }
}
