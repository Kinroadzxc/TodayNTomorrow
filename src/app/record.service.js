"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var RecordService = (function () {
    //HTTP构造
    function RecordService(http) {
        this.http = http;
        //服务器配置
        this.yunUrl = 'http://47.91.155.55';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    //获取记录条目
    RecordService.prototype.getTest = function () {
        // this.http.get(`http://47.91.155.55/gettest`);
        return this.http.get("http://47.91.155.55/gettest")
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //错误处理
    RecordService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    //新条目Put向服务器
    RecordService.prototype.upload = function (record) {
        var url = this.yunUrl + ":8000/upload";
        return this.http
            .put(url, JSON.stringify(record), { headers: this.headers })
            .toPromise()
            .then(function () { return record; })
            .catch(this.handleError);
    };
    return RecordService;
}());
RecordService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RecordService);
exports.RecordService = RecordService;
//# sourceMappingURL=record.service.js.map