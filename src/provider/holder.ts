import {Injectable} from '@angular/core';
import {Api} from './api';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

@Injectable()
export class Holder {

  announces: Response;
  notices: Response;
  alerts: { level: string, content: string }[] = [];
  semester: Response;
  banners: Response;
  scores: any[];
  posts: Response;
  myPosts: Response;
  content: { [key: string]: Response; } = {};
  myContent: { [key: string]: Response } = {};
  comment: { [key: string]: Response; } = {};
  money: number;
  Rank: any[];
  CTFProblems: any[];
  switch: boolean;
  accounts: any[];
  folders: { [key: number]: any[]; } = {};
  activeMailAccount: number;
  activeMailFolder: number;
  blogs: Response;

  constructor(public api: Api) {

  }

  getAnnounce(): Observable<Response> {
    if (this.announces) {
      return Observable.of(this.announces);
    }
    const seq = this.api.get('intro/announce').share();
    seq.subscribe((data) => {
      this.announces = data;
    }, err => {
      this.alerts.push({level: 'alert-danger', content: '公告获取失败，请稍后再试'});
      console.error('ERROR', err);
    });
    return seq;
  }
  getNotice(): Observable<Response> {
    if (this.notices) {
      return Observable.of(this.notices);
    }
    const seq = this.api.get('intro/notice').share();
    seq.subscribe((data) => {
      this.notices = data;
    }, err => {
      this.alerts.push({level: 'alert-danger', content: '授课通知获取失败，请稍后再试'});
      console.error('ERROR', err);
    });
    return seq;
  }

  getSemester(): Observable<Response> {
    if (this.semester) {
      return Observable.of(this.semester);
    }
    const seq = this.api.get('schedule').share();
    seq.subscribe((data) => {
      this.semester = data;
    }, err => {
      this.alerts.push({level: 'alert-danger', content: '课表获取失败，请稍后再试'});
      console.error('ERROR', err);
    });
    return seq;

  }

  getBanner(): Observable<Response> {
    if (this.banners) {
      return Observable.of(this.banners);
    }
    const seq = this.api.get('banner').share();
    seq.subscribe((data) => {
      this.banners = data;
    }, err => {
      this.alerts.push({level: 'alert-danger', content: '横幅获取失败，请稍后再试'});
      console.error('ERROR', err);
    });
    return seq;
  }

  getBlog(): Observable<Response> {
    if (this.blogs) {
      return Observable.of(this.blogs);
    }
    const seq = this.api.get('blog').share();
    seq.subscribe((data) => {
      this.blogs = data;
    }, err => {
      this.alerts.push({level: 'alert-danger', content: '博客获取失败，请稍后再试'});
      console.error('ERROR', err);
    });
    return seq;
  }
}
