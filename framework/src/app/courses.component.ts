
import{Component} from "@angular/core";
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',
    template:`
    <h1>List of courses we have to define</h1>
    <div><b>Title:</b> {{title}}  <b>Author:</b> {{name}} <b>Introduction:</b> {{getName()}}</div>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    `
})
export class CoursesComponent
{
    title:string = "Title Here";
    name:string = "Navaneeth";
    courses:string[];
   

    constructor(service:CoursesService)
    {
        
        this.courses = service.getCourse();
    }

    getName()
    {
        return "My Name is "+this.name;
    }

}