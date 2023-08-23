import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export abstract class BaseService {
    protected handleError(error: HttpErrorResponse) {
        return throwError(error);
    }
}
