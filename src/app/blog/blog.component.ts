import {Component, OnInit} from '@angular/core';
import {Holder} from '../../provider/holder';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  blogs: {
    content: string,
    url: string,
    date: string,
    title: string,
    writer: string
  }[];

  constructor(private holder: Holder) {
  }
  ngOnInit() {
    this.holder.getBlog().subscribe(data => this.blogs = data.json().data);
  }

}
