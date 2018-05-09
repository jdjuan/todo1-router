import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.paramMap.pipe(pluck('params', 'id')).subscribe(console.log);
  }

  ngOnInit() {}
}
