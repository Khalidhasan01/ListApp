import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListsServiceService } from '../lists-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public listService: ListsServiceService,
    public route: Router,
    public activatedRoute: ActivatedRoute ){

  }
  ngOnInit(){

  }



  editItem(id:number){
    this.route.navigate(["edit", id])
  }

  deleteItem(){
    this.listService.removeItem()
  }

}
