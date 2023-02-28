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
  list!:List


  name= new FormControl('', {validators:[Validators.required, Validators.minLength(3)]})
  type= new FormControl('',{validators:[Validators.required, Validators.minLength(3)]})
  description= new FormControl('',{validators:[Validators.required, Validators.minLength(5)]})

  form = new FormGroup({
    name: this.name ,
    type: this.type ,
    description: this.description

  })

  constructor(public dialog: MatDialog, public listService: ListsServiceService) {}

  openDialog() {
    const dialogRef = this.dialog.open(ListItemComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  showData(){
    console.log(typeof(this.name.value))
    console.log(typeof(this.name))
    // this.listService.addItem()
    this.list={name:this.name.value,
          type:this.type.value,
          description: this.description.value }
    this.listService.addItem(this.list)

  }

  }

