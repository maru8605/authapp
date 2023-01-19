import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-01rg3lgi60020345.us.auth0.com',
      clientId: 'sEoLiO2HxdZSRqtKJV7klmzw4jKbl09e',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
