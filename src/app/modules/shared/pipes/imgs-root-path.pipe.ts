import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgsRootPath'
})
export class ImgsRootPathPipe implements PipeTransform {
  private path = './assets/imgs/';

  transform(value: any, args?: any): any {
    return this.path + value;
  }
}
