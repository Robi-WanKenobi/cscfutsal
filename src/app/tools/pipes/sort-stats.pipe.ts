import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortStats'
})
export class SortStatsPipe implements PipeTransform {
  transform(items: Array<{}>, args?: any): any {
    return items.sort(function(a, b){
      if (args.property) {
        var a_aux = a[args.property];
        var b_aux = b[args.property];
        if(a_aux[args.subproperty] < b_aux[args.subproperty]){
            return -1 * args.direction;
        }
        else if( a_aux[args.subproperty] > b_aux[args.subproperty]){
            return 1 * args.direction;
        }
        else{
            return 0;
        }
      }
      else return 0;
    });
  };
}
