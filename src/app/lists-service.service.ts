import { Injectable } from '@angular/core';

export interface List{
  name:string|null,
  type:string|null,
  description:string|null,
}

@Injectable({
  providedIn: 'root'
})
export class ListsServiceService {

  constructor() { }
  list:List[]=[]

  addItem(list:List){
    this.list.push(list)
    console.log(this.list)
    }


}
