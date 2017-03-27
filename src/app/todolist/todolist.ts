import {Item} from "./item";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";


@Injectable()
export class TodolistService {
  private _items: Item[];
  private http: Http;

  constructor(http:Http) {
    this.http    = http;
    this._items = [];
    this.initList();
  }

  initList(){
    this.http.get('https://hpe/api/v2/login')
        .subscribe(res => this._items = res.json())
  }

  get items(): Item[] {
    return this._items;
  }

  public addItem(title: string):void {
    this._items.push(new Item(title));
  }

  public removeItem(item: Item):void{
    const index = this._items.indexOf(item);
    this._items.splice(index , 1);
  }

  public toggle(item: Item): void {
    item.completed = !item.completed;
  }
















}