import { Coffee } from './coffee';
import { createAction, props } from "@ngrx/store";


export const invokeCoffeesAPI = createAction(
    '[Coffees API] Invoke Coffees Fetch API'
);

export const CoffeesFetchAPISuccess = createAction(
    '[Coffees API] Fetch API Success',
    props<{ allCoffees: Coffee[] }>()
);

