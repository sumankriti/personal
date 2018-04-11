import { Constants } from './constant';
import { PipeTransform, Pipe } from "@angular/core";
import { DatePipe } from '@angular/common';
@Pipe({
    name: 'age'
})
export class AgePipe extends DatePipe implements PipeTransform{
    transform(value: any, args?: any): string{
        return super.transform(value, Constants.DATE_FMT);
    }

}