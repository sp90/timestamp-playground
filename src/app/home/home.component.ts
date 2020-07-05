import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  myButtonsStorage: any;
  myButtons = [];
  logs = [];
  createButtonForm = new FormGroup({
    name: new FormControl(''),
    hasText: new FormControl(false),
  });

  constructor(private localStorage: LocalStorageService) {
    this.myButtonsStorage = localStorage.init('buttons');
  }

  ngOnInit() {
    const buttonStorage = this.myButtonsStorage.get();

    this.myButtons = buttonStorage ? buttonStorage : [];
  }

  createButton() {
    let newObj = this.createButtonForm.value;

    newObj.text = '';

    this.myButtons.push(newObj);
    this.myButtonsStorage.set(this.myButtons);
  }

  saveTimestamp(name, text) {
    const timestamp = new Date();

    this.logs.push({
      id: name,
      timestamp: timestamp,
      message: text,
    });
  }
}
