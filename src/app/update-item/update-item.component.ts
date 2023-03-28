import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ListItemComponent } from '../list-item/list-item.component';
import { ActivatedRoute } from '@angular/router';
import { ListsServiceService } from '../lists-service.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {



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
constructor(public route:ActivatedRoute, public itemService: ListsServiceService ){

}

ngOnInit(){

}


}
