import { invokeCoffeesAPI, CoffeesFetchAPISuccess } from './coffees.action';
import { Injectable } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectCoffees } from './coffees.selector';


@Injectable()
export class CoffeesEffect {
    constructor(
        private actions$: Actions,
        private coffeesService: CoffeeService,
        private store: Store
    ) { }

    loadAllCoffees$ = createEffect(() =>
        this.actions$.pipe(
            ofType(invokeCoffeesAPI),
            withLatestFrom(this.store.pipe(select(selectCoffees))),
            mergeMap(([, coffeeformStore]) => {
                if (coffeeformStore.length > 0) {
                    return EMPTY;
                }
                return this.coffeesService
                    .get()
                    .pipe(map((data) => CoffeesFetchAPISuccess({ allCoffees: data })));
            })
        )
    );
}

