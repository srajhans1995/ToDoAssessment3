import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from 'src/app/models/Category';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  categorytasks;
  categorytask: Category;
  index: number;

  constructor(categoryService: CategoryService, private toastr: ToastrService) {
    this.categorytasks = categoryService.categorytasks;
  }

  ngOnInit() {
  }

}
