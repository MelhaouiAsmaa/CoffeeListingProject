import { invokeCoffeesAPI } from '../store/coffees.action';
import { selectCoffees } from '../store/coffees.selector';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoffeeService } from '../services/coffee.service';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoffeeDetailsComponent implements OnInit {

  idCoffee: any;
  coffee: any;
  constructor(private coffeeService: CoffeeService,
    private activatedroute: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
    this.activatedroute.params.subscribe((param: Params) => {
      this.idCoffee = param['id'];
      this.coffeeService.getCoffee(this.idCoffee).subscribe(
        data => {
          console.log(data);
          this.coffee = data;
        })

    })

  }

  gotoList(): void {
    this.router.navigate(['/coffeeList']);
  }

}