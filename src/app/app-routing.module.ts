import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

const routes: Routes = [
  { path: '', component: CoffeeListComponent },
  { path: 'coffeeList', component: CoffeeListComponent },
  { path: 'coffeeDetails/:id', component: CoffeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
