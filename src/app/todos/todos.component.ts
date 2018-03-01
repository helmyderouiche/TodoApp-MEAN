import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    desc: new FormControl('', [Validators.required, Validators.maxLength(20)]),

    DONE: new FormControl('')
  });

  todos;


  ngOnInit() {
    this.apiService.getTodos().subscribe(res => { this.todos = res.data; });
  }

  todoFormSubmit(dataForm) {
    this.apiService.addTodo(dataForm).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    });
  }

}
