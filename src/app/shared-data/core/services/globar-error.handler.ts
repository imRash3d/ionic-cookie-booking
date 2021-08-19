import { ErrorHandler, Injectable, Injector } from '@angular/core';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {


    constructor(private injector: Injector) { }

    handleError(error: Error) {


        // Re-throw the error
        throw error;
    }
}
