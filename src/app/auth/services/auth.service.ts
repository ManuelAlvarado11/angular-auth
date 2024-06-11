import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environments';
import { AuthStatus, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Properties
  private readonly baseUrl: string = environment.baseUrl
  private http = inject(HttpClient)
  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  // Constructor
  constructor() { }
}
