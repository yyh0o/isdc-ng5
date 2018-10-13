import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-service-homework',
  templateUrl: './service-homework.component.html',
  styleUrls: ['./service-homework.component.css']
})
export class ServiceHomeworkComponent implements OnInit {
  private uploader: FileUploader = new FileUploader({
    url: '/api/file/upload',
    method: 'POST',
    itemAlias: 'file'
  });

  constructor() {
  }

  ngOnInit() {
  }

  selectedFileOnChanged(event: any) {
    console.log(event.target.value);
    console.log(event);

  }

  /**
   * 上传文件方法
   */
  uploadFile() {
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      if (status === 200) {
        const tempRes = response;
        alert(response);
      } else {
        alert('上传失败');
      }
    };
    this.uploader.queue[0].upload(); // 开始上传
  }

}
