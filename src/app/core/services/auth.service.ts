import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // En dur pour simplifier, devrait être récupéré au login ?
  private token! :string;

  login() {
    this.token = 'MyFakeToken';
  }

  getToken(): string {
    return this.token;
  }
}
