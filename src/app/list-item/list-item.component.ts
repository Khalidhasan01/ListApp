import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ListsServiceService } from '../lists-service.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  constructor(public listService: ListsServiceService, public route: Router){}

  deleteItem(){
      this.listService.removeItem()
  }
  onPageChange(event: PageEvent){
    let pageSlice = this.listService.list.slice(0, 3)
    console.log(event)
    const startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize
    if(endIndex>this.listService.list.length)
    {
      endIndex=this.listService.list.length
    }
    pageSlice = this.listService.list.slice(startIndex, endIndex)
  }

  editItem(){
    this.route.navigate(['edit/0'])
  }

}
