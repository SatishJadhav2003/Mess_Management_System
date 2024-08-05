import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  isLoggedIn = signal(true);
  userName = signal('satish');
  constructor() {}
}
