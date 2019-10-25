import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testchild',
  templateUrl: './testchild.component.html',
  styleUrls: ['./testchild.component.less']
})
export class TestchildComponent implements OnInit {
  @Input('parentData') public myCompany;

  constructor() { }

  ngOnInit() {
  }

}
