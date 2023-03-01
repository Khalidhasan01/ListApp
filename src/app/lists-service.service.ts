import { Injectable } from '@angular/core';

export interface List{
  name:string | null,
  type:string | null,
  description:string | null,
  active: string | null
  complete:string | null,
  fail: string | null
}

@Injectable({
  providedIn: 'root'
})
export class ListsServiceService {

  constructor() { }
  list:List[]=[{name:"angular",
    type:"framework",
    description:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.",
    active: "active",
    complete:"complete",
    fail: "fail"}]

  addItem(list:List){
    this.list.push(list)
    console.log(this.list)
    }

  removeItem(){
    this.list.pop()
  }


}
