import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
userName = signal('satish');
  constructor() { }
}
