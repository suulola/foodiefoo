import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  @Input() orderedItems: [];
  constructor() { }

  ngOnInit() {
  }

}
