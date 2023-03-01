import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:'',component: ItemFormComponent},
  {path:'edit/0',component:ItemFormComponent },
  {path:'edit/:id',component:ItemFormComponent },
  {path:'todolist', component:TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
