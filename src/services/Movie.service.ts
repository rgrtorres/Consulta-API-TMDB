import { Injectable } from '@angular/core';
import { BaseService } from './Base.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './Config.service';
import { Observable, catchError } from 'rxjs';
import { IResult } from 'src/interfaces/IResult';

@Injectable()
export class movieService extends BaseService {

    constructor(
        private readonly http: HttpClient,
        private readonly config: ConfigService,
    ) {
        super();
    }

    genres() {
        return this.http.get(this.config.base() + '3/genre/movie/list?language=pt&' + this.config.getApiKey()).pipe(
            catchError(this.handleError)
        );
    }

    topRated() {
        return this.http.get(this.config.base() + '3/movie/top_rated?language=pt&' + this.config.getApiKey()).pipe(
            catchError(this.handleError)
        );
    }
}