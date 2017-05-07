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
var record_service_1 = require("./record.service");
var CompeComponent = (function () {
    function CompeComponent(recordService) {
        // recordService: RecordService;
        this.word = "比较";
    }
    CompeComponent.prototype.test = function () {
        this.word = "hhhh";
        this.recordService.getTest();
    };
    return CompeComponent;
}());
CompeComponent = __decorate([
    core_1.Component({
        selector: 'compe',
        templateUrl: "app/UI/compe.html",
        styleUrls: ['app/UI/compe.css']
    }),
    __metadata("design:paramtypes", [record_service_1.RecordService])
], CompeComponent);
exports.CompeComponent = CompeComponent;
//# sourceMappingURL=compe.component.js.map