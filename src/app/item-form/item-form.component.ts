import { Component, OnInit } from '@angular/core';
import { List, ListsServiceService } from '../lists-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ListItemComponent } from '../list-item/list-item.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  list!:List;
  item!:any;
  itemId!:any;



  name= new FormControl('', {validators:[Validators.required, Validators.minLength(3)]})
  type= new FormControl('',{validators:[Validators.required, Validators.minLength(3)]})
  description= new FormControl('',{validators:[Validators.required, Validators.minLength(5)]})
  active = new FormControl('')
  complete =new FormControl('')
  fail= new FormControl('')


  form = new FormGroup({
    name: this.name ,
    type: this.type ,
    description: this.description,
    active: this.active,
    complete:this.complete,
    fail: this.fail



  })
  constructor(
    public listService: ListsServiceService,
    public dialog: MatDialog,
    public activatedRoute: ActivatedRoute
    ){}


  ngOnInit(){
    // this.itemId =this.activatedRoute.snapshot.paramMap.get("id")
    this.activatedRoute.paramMap.subscribe(parameterMap=>{
     const id = +parameterMap.get('id')!
     this.getItem(id)
    })


  }

  getItem(id:number){
    if( id === 0){

    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(ListItemComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  showData(){
    // console.log(typeof(this.name.value))
    // console.log(typeof(this.name))
    // this.listService.addItem()
    this.list={name:this.name.value,
          type:this.type.value,
          description: this.description.value,
          active: this.active.value,
          complete:this.complete.value,
          fail: this.fail.value
           }
    this.listService.addItem(this.list)

  }

}
