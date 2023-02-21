import { Component } from "@angular/core"


@Component({

  selector:'pm-root',
  template:`<html><h1>{{pageTitle}}</h1>
            <div>This is my first component</div>
            <pm-products></pm-products>
            </html>`,




})
export class AppComponent{
  pageTitle:string="This is my new AppComponent"
}

 