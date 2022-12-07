import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',

})
export class MyPipePipe implements PipeTransform {

  transform(val){
    if (val.includes("@")) {
      console.log(val);
    return val + "datasirpi.com";
    }
    return val 
       
  }

}
