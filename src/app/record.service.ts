import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Record } from './record';

@Injectable()
export class RecordService {

    //服务器配置
    private yunUrl = 'http://47.91.155.55';
    private headers = new Headers({'Content-Type': 'application/json'});

    //HTTP构造
    constructor(private http: Http) { }

    //获取记录条目
    getTest(): Promise<string[]> {
        // this.http.get(`http://47.91.155.55/gettest`);
        return this.http.get(`http://47.91.155.55/gettest`)
               .toPromise()
               .then(response => response.json().data as string[])
               .catch(this.handleError);
    }

    //错误处理
    private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    //新条目Put向服务器
    
    upload(record: Record): Promise<Record> {
        const url = `${this.yunUrl}:8000/upload`;
        return this.http
            .put(url, JSON.stringify(record), {headers: this.headers})
            .toPromise()
            .then(() => record)
            .catch(this.handleError);
    }

}