import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'logopipe' })
export class LogoPipe implements PipeTransform {
    transform(value: string) : string {
        let ret_value : string = "";
        switch(value) {
            case "experience": 
                ret_value = "fas fa-briefcase fa-lg";
                break;
            case "education":
                ret_value = "fas fa-user-graduate fa-lg";
                break;
            case "teaching":
                ret_value = "fas fa-chalkboard-teacher fa-lg"
                break;
            case "publication":
                ret_value = "fas fa-book fa-lg"
                break;
            case "course":
                ret_value = "fas fa-certificate fa-lg";
                break;
            case "competition":
                ret_value = "fas fa-trophy fa-lg";
                break;
            case "misc":
                ret_value = "fas fa-theater-masks fa-lg";
                break;
            default:
                console.log("Warning: No logo found for " + value);
                break;
        }
        return ret_value;
    }
}