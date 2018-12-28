import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoservice } from 'src/app/services/to-do.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import {CategoryService} from 'src/app/services/category.service'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id;

  name: string = "";
  category: string = "";
  status: boolean = false;
  toDoService: ToDoservice;
  en;

  constructor(
    toDoService: ToDoservice,
    private toastr: ToastrService,
    private route: ActivatedRoute, ename:CategoryService)
     { this.en = ename.categorytasks;
       this.toDoService = toDoService; }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }

  onSubmitClicked() {
    this.toDoService.tasks.push(
      new ToDo(this.name, this.category, this.status)
    );

    this.name = "",
      this.category = "",
      this.status = false;
  }

  clearSearch() {
    this.name = null;
    this.category = null;
    this.status = null;
    this.toastr.warning('ToDo Cleared Sucessfully');
  }
}
