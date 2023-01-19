import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  autentificado: boolean = false;
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuth => {
      if (isAuth) {
        this.autentificado = true;
      }
    })
  }

  login() {
    this.auth.loginWithRedirect();

  }

  logout() {
    this.auth.logout();

  }
}
