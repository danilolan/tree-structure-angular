import { Injectable } from '@angular/core';
//#TODO create generics
@Injectable({
  providedIn: 'root'
})
export class DbService {
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): any | null {
    let data = localStorage.getItem(key) || "";
    return data ? JSON.parse(data) : null;
  }

  constructor() { }
}
