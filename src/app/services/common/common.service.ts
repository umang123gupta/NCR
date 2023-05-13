import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  //Pagination
  getPager(toatlItems:number, currentPage:number =1, pageSize: number = 10):any{
    const totalPages = Math.ceil(toatlItems/pageSize); // calculate all pages

    if(currentPage < 1){
      currentPage = 1;
    }else if ( currentPage >= totalPages){
      currentPage = totalPages;
    }

    let startPage:number;
    let endPage:number;
    if(totalPages <=5){   // less than 5 pages to show all
      startPage = 1;
      endPage = totalPages;
    } else{
      if( currentPage <= 3){
        startPage = 1;
        endPage = 6;
      }else if(currentPage + 3 >= totalPages){
        startPage = totalPages - 4;
        endPage = totalPages;
      }else{
        startPage = currentPage -2;
        endPage = currentPage +2;
      }
    }

    const startIndex = (currentPage -1)* pageSize;
    const endIndex = Math.min(startIndex + pageSize -1, toatlItems -1);

    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
    
    return{
      toatlItems,
      currentPage,
      pageSize,
      endPage,
      pages,
      totalPages,
      startPage,
      startIndex,
      endIndex
    }
    
  }
}
