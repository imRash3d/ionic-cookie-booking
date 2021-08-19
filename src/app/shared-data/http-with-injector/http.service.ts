import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, from } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';



@Injectable()
export class HttpService {
    config = environment;

    constructor(
     
        private http: HttpClient) {

    }

    get(url: string, option?: any | null): Observable<any> {
        return this.http.get(this.config.API_URL + url, option)
    }

    post(url: string, body: any | null, options?: any | null): Observable<any> {
        return this.http.post(this.config.API_URL + url, body, options);
    }

    put(url: string, body: any | null, options?: any | null): Observable<any> {
        return this.http.put(this.config.API_URL + url, body, options);
    }

    patch(url: string, body: any | null, options?: any | null): Observable<any> {
        return this.http.patch(this.config.API_URL + url, body, options);
    }

    delete(url: string, options?: any | null): Observable<any> {
        return this.http.delete(this.config.API_URL + url, options);
    }

    getErrorMessage(err: HttpErrorResponse) {
        let message = '';
        if (err.error) {
            if (err.error.result) {
                message = err.error.result.error ? err.error.result.error : err.error.result.message;
            } else {
                message = err.message ? err.message : err.statusText;
            }
        }
        return message;
    }

    getBlob(url: string): Promise<Blob> {
        return this.http.get<Blob>(this.config.API_URL + url, { responseType: 'blob' as 'json' })
            .toPromise();
    }

    postFile(url: string, data: { [key: string]: any }): Observable<any> {
        const form = new FormData();
        Object.keys(data).forEach(key => {
            form.append(key, data[key]);
        });
        return this.http.post(this.config.API_URL + url, form);
    }
}

export class HttpConfig {
    API_URL?: string;
}
