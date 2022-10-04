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
import { CategoryComponent } from './components/pages/category/category.component';
import { UserComponent } from './components/pages/user/user.component';
import { AuthorComponent } from './components/pages/author/author.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';
import { RegisterQuizComponent } from './components/pages/register-quiz/register-quiz.component';
import { RegisterAuthorComponent } from './components/pages/register-author/register-author.component';
import { RegisterCategoryComponent } from './components/pages/register-category/register-category.component';
import { EmblemasComponent } from './components/pages/emblemas/emblemas.component';
import { RegisterEmblemasComponent } from './components/pages/register-emblemas/register-emblemas.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UpdateUserComponent } from './components/pages/update-user/update-user.component';
import { LogoffComponent } from './components/pages/logoff/logoff.component';
import { SidebarsComponent } from './components/sidebars/sidebars.component';





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
    WelcomeComponent, 
    ChangeBgDirective, 
    CategoryComponent, 
    UserComponent, 
    AuthorComponent, 
    QuizComponent, 
    RegisterQuizComponent,
    RegisterAuthorComponent, 
    RegisterCategoryComponent, 
    EmblemasComponent, 
    RegisterEmblemasComponent,
    UpdateUserComponent,
    LogoffComponent,
    SidebarsComponent,
  
          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
