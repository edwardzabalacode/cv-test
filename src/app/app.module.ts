import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from './components/btn/btn.component';
import { SocialButtonComponent } from './components/social-button/social-button.component';
import { AboutComponent } from './pages/about/about.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListItemComponent,
    CardComponent,
    BtnComponent,
    SocialButtonComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
