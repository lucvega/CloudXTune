import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  searchResults: string[];
  limit: number = 200;
  filter: string;
  searchKey: string;

  constructor(private searchService: SearchService,
    formBuilder: FormBuilder) {

    this.searchForm = formBuilder.group({
      search: ['', Validators.required],
      filter: ['musicArtist', Validators.required]
    });

    this.searchForm.valueChanges.subscribe(data => {
      if (data.search.length >= 2) {
        this.search(data.search, data.filter);
      } else {
        this.searchResults = null;
      }
    })
  }

  search(searchKey: string, filterKey: string) {
    this.searchService.getArtist(searchKey, filterKey, this.limit).subscribe((res: any) => {
      if (res) {
        this.searchResults = res.results;
        this.filter = filterKey.replace(/([A-Z])/g, ' $1').trim();
        this.searchKey = searchKey;
      }
    });
  }

  ngOnInit() {
  }

}
