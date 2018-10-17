import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {User} from '../../provider/user';
import {Router} from '@angular/router';
import {Api} from '../../provider/api';
import {Holder} from '../../provider/holder';

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
  loading = false;

  constructor(private user: User, private router: Router, private api: Api, private holder: Holder) {
  }

  ngOnInit() {
  }

  selectedFileOnChanged(event: any) {
    const tempfile = this.uploader.queue[this.uploader.queue.length - 1];
    this.uploader.clearQueue();
    this.uploader.queue.push(tempfile);
    console.log(this.uploader.queue);
  }

  /**
   * 上传文件方法
   */
  uploadFile() {
    this.loading = true;
    const context = this;
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      if (status === 200) {
        if (response === `上传成功`) {
          context.loading = false;
          context.holder.alerts.push({level: 'alert-success', content: `${response}`});
        } else if (response === '请先登录') {
          context.holder.alerts.push({level: 'alert-danger', content: `${response}`});
          context.router.navigateByUrl('/login');
        } else {
          context.holder.alerts.push({level: 'alert-danger', content: `${response}`});
        }
      } else {
        context.holder.alerts.push({level: 'alert-danger', content: `上传失败`});
        context.loading = false;
      }
    };
    this.uploader.queue[0].onError = function (response, status, headers) {
      context.holder.alerts.push({level: 'alert-danger', content: `上传失败`});
      context.loading = false;
    };
    this.uploader.queue[0].upload();
  }

}
