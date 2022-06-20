import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CuriositiesComponent } from './components/pages/curiosities/curiosities.component';
import { LoginComponent } from './components/pages/login/login.component';
import { EmblemsComponent } from './components/pages/emblems/emblems.component';
import { RankingComponent } from './components/pages/ranking/ranking.component';
import { SearchComponent } from './components/pages/search/search.component';
import { NewUserComponent } from './components/pages/new-user/new-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { QuestionComponent } from './components/pages/question/question.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { ChangeBgDirective } from './change-bg.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    CuriositiesComponent,
    LoginComponent,      
    EmblemsComponent,
    RankingComponent,
    SearchComponent,
    NewUserComponent,  
    UserFormComponent, 
    QuestionComponent, 
    WelcomeComponent, ChangeBgDirective,       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
