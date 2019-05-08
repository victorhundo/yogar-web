import { ListProfessorComponent } from './pages/professor/list-professor/list-professor.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProfessorComponent } from './pages/professor/view-professor/view-professor.component';
import { RegisterProfessorComponent } from './pages/professor/register-professor/register-professor.component';
import { HomeComponent } from './layout/home/home.component';
import { FeedComponent } from './pages/feed/feed/feed.component';
import { ViewPostComponent } from './pages/feed/view-post/view-post.component';
import { NewPostComponent } from './pages/feed/new-post/new-post.component';
import { EditPostComponent } from './pages/feed/edit-post/edit-post.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'list/professor', component: ListProfessorComponent },
  { path: 'view/professor', component: ViewProfessorComponent},
  { path: 'new/professor', component: RegisterProfessorComponent},
  { path: 'edit/professor', component: RegisterProfessorComponent},

  { path: 'list/post', component: FeedComponent },
  { path: 'view/post', component: ViewPostComponent},
  { path: 'new/post', component: NewPostComponent},
  { path: 'edit/post', component: EditPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
