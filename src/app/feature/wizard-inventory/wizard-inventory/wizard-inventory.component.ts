import { Component, OnInit } from '@angular/core';
import { ConsoleIO } from '../../util/console-io';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-wizard-inventory',
  templateUrl: './wizard-inventory.component.html',
  styleUrl: './wizard-inventory.component.css'
})
export class WizardInventoryComponent implements OnInit {
  title: string = "Welcome To Wizard Inventory!!";

  consoleIO: ConsoleIO = new ConsoleIO();

  items: Item[] = [];
  newItem: Item = new Item();

  ngOnInit(): void {
    this.items = [
      new Item(1, "wooden staff"),
      new Item(2, "wizard hat"),
      new Item(3, "cloth shoes")
    ];
  }

  addItem(): void {
    if (this.items?.length != 4) {
      this.items?.push(this.newItem);
      this.newItem = new Item();
    } else {
      window.alert("You can't carry more than 4 items! Drop item first!!");
    }
  }

  delete(index: number) {
    this.items?.splice(index, 1);
  }

  editItem(): void {
    let itemNum: number = this.consoleIO.getInt("ID to edit: ", 1, this.items.length);
    let itemName: string = this.consoleIO.getString1("Name to update: ");
    this.items[itemNum - 1].name = itemName;
    window.alert(`${itemNum} has been updated!`);
  }


}
