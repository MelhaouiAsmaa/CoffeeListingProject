import { selectCoffees } from '../store/coffees.selector';
import { invokeCoffeesAPI } from '../store/coffees.action';
import { Store, select } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoffeeService } from '../services/coffee.service'
import { Coffee } from '../store/coffee';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoffeeListComponent implements OnInit {
  coffees: Coffee[] = [];
  currentCoffee: Coffee | undefined;
  currentIndex = -1;
  title = '';
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [3, 6, 9];

  constructor(private coffeeService: CoffeeService,
    private router: Router,
    private store: Store<any>) { }

  coffees$ = this.store.select(selectCoffees);


  ngOnInit(): void {
    this.store.dispatch(invokeCoffeesAPI());
    console.log(this.coffees);

    this.retrieveCoffees();
  }

  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
  retrieveCoffees(): void {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.coffeeService.getCoffeeList()
      .subscribe(
        data => {
          this.count = data.length;
          console.log(data.length);
        },
        error => {
          console.log(error);
        });
    this.coffeeService.getCoffeeListWithParams(params)
      .subscribe(
        response => {
          this.coffees = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveCoffees();
  }

  gotoDetails(id: any): void {
    console.log("voilà")
    this.router.navigate(['/coffeeDetails', id]);
  }

}


