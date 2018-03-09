import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeShowComponent } from './employee-show/employee-show.component';
import { ExamTypesComponent } from './exam-types/exam-types.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';
import { ExamsComponent } from './exams/exams.component';
import { ExamComponent } from './exam/exam.component';

let routes = [
  {path: "", redirectTo: "/employees", pathMatch: "full"},
  {path: "employees", component: EmployeeComponent},
  {path: "employees/:id", component: EmployeeShowComponent},

  {path: "exam-types", component: ExamTypesComponent},

  {path: "clients", component: ClientsComponent},
  {path: "clients/:id", component: ClientComponent},

  {path: "exams", component: ExamsComponent},
  {path: "exams/:id", component: ExamComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeShowComponent,
    ExamTypesComponent,
    ClientsComponent,
    ClientComponent,
    ExamsComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
