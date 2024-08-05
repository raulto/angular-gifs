import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template:`
    <h1>Search</h1>
    <input type=text placerhorder = "Buscar Gifs"  (keyup.enter)="searchTag()" #tagTextSearch>
  `
})
export class SearchBoxComponent {

  @ViewChild('tagTextSearch')
  public tagSearch !: ElementRef<HTMLInputElement>;

  searchTag():void{

    const test: String =  this.tagSearch.nativeElement.value;
    console.log({test});

  }

}
