import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  user: any;
  product = {
    title: '',
    desc: '',
    minprice: 0,
    maxprice: 0,
    picture: '',
    category: '',
    city: ''
  };
  city = {
    name: '',
    desc: '',
    pictures: '',
    location: {
      lat: 0,
      lon: 0
    },
    
  };
}
