import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  title = 'toolsets';

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
  }

  uploadMultiple(event: any) {
    const files: FileList = event.target.files;

    const formdata = new FormData();

    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      formdata.append('files', element);
    };

    this.httpClient
      .post('http://localhost:4000/api/file/multifiles', formdata)
      .subscribe(
        (res) => {
          console.log(res);
        },
        err => console.log(err)
      );
  };

  upload(event: any) {
    const file = event.target.files[0];

    const formdata = new FormData();
    formdata.append('file', file);

    this.httpClient.post('http://localhost:4000/api/images/upload', formdata).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
