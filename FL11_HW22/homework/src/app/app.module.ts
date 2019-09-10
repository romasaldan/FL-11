import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';

import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { ArticleComponent } from './components/article/article.component';
import { from } from 'rxjs';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContentComponent } from './components/content/content.component';

import { FormsModule } from '@angular/forms';
import { SearchPipe }  from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateNewsComponent,
    ArticleComponent,
    NavigationComponent,
    ContentComponent,
    SearchPipe,  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, 
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
