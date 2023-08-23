import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppConfig } from 'src/interfaces/IAppConfig';

@Injectable()
export class ConfigService {
    public appConfig!: IAppConfig;

    constructor(private readonly http: HttpClient) { }
    
    public loadAppConfig() {
        return this.http.get('../assets/data/appConfig.json').toPromise().then(data => {
            this.appConfig = data as IAppConfig;
        })
    }

    public getApiKey(): string {
        return `api_key=${this.appConfig.apiKey}`;
    }

    public base(): string {
        return this.appConfig.base;
    }
}