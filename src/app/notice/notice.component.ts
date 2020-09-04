import {Component, OnInit} from '@angular/core';
import {MarkdownService} from 'angular2-markdown';
import {Holder} from '../../provider/holder';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  notices: { title: string, content: string }[];

  ngOnInit(): void {
    this.holder.getNotice().map(data => data.json())
      .subscribe(data => {
        this.notices = data.data;
      });
  }

  constructor(public _markdown: MarkdownService, public holder: Holder) {
    this._markdown.renderer.table = (header: string, body: string) => {
      return `
      <table class="table table-bordered table-hover table-responsive">
        <tbody>
          ${body}
        </tbody>
      </table>
      `;
    };
  }


}
