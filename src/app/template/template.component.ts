import { Component } from "@angular/core";

@Component({
    selector: 'app-template',
    template: `<p>This is template</p>`,
    styles:[
        `p{
            padding:20px;
            background-color:gray;
            border: 1px solid red;
            color: white;
            font-size: 20px;
        }`
    ]
})
export class TemplateComponent{

}