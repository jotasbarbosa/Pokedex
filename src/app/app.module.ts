import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonCardModule } from './components/pokemon-card/pokemon-card.module';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, environment.envModules, PokemonCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
