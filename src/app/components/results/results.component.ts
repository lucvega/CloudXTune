import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() results: string[];
  @Input() searchKey: string[];
  @Input() filter: string[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
