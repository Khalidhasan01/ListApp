import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ListItemComponent } from './list-item/list-item.component';
import { ListsServiceService, List } from './lists-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List';


  constructor( public listService: ListsServiceService) {}



  }

