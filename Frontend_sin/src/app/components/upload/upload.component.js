"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadComponent = void 0;
const core_1 = require("@angular/core");
let UploadComponent = class UploadComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.title = 'toolsets';
    }
    ngOnInit() {
    }
    uploadMultiple(event) {
        const files = event.target.files;
        const formdata = new FormData();
        for (let index = 0; index < files.length; index++) {
            const element = files[index];
            formdata.append('files', element);
        }
        ;
        this.httpClient
            .post('http://localhost:4000/api/file/multifiles', formdata)
            .subscribe((res) => {
            console.log(res);
        }, err => console.log(err));
    }
    ;
    upload(event) {
        const file = event.target.files[0];
        const formdata = new FormData();
        formdata.append('file', file);
        this.httpClient.post('http://localhost:4000/api/images/upload', formdata).subscribe(res => {
            console.log(res);
        }, err => console.log(err));
    }
};
UploadComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-upload',
        templateUrl: './upload.component.html',
        styleUrls: ['./upload.component.css']
    })
], UploadComponent);
exports.UploadComponent = UploadComponent;
