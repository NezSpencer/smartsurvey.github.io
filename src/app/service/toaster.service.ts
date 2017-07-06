import {Injectable, OpaqueToken} from '@angular/core';
export let Toaster_Token = new OpaqueToken('toastr');

@Injectable()
export class ToasterService {

  constructor() { }

}
