import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductLstComponent } from './product-lst/product-lst.component';
import { ReversePipe } from './reverse.pipe';
import { DateFormatPipe } from './date-format.pipe';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http'

import { FibonacciPipe } from './pipes/fibonacci.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { UserListComponent } from './component/user-list/user-list.component';
import { RouterModule } from '@angular/router';

// import { TodoComponent } from '@todo/components/todo/todo.component'; 
// import { TodoListComponent } from '@todo/components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductLstComponent,
    ReversePipe,
    DateFormatPipe,
    ListComponent,
    FibonacciPipe,
    HighlightDirective,
    UserListComponent,
    // TodoComponent,
    // TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }