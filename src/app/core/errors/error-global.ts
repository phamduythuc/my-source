import {ErrorHandler, Injector, Injectable} from "@angular/core";
import {BaseComponent} from "../base.component";
@Injectable({
  providedIn: 'root'
})
export class ErrorGlobal extends BaseComponent implements ErrorHandler{

  constructor(private injector:Injector) {
    super(injector);
  }
   handleError(error: any) {
    // super.handleError(error);
     this.showSnackbar(error, 'error')
  }
}
