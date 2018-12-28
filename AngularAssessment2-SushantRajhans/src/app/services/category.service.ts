import { Injectable } from '@angular/core';
import{Category} from 'src/app/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categorytasks = [
    new Category('CDAC'),
    new Category('ANSH INTERNAL'),
    new Category('COMMUNICATION')
  ];

  constructor() { }
}
