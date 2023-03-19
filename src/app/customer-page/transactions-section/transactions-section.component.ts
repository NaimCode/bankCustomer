import { Component, Input } from '@angular/core';
import { Transaction } from './transaction.modal';

@Component({
  selector: 'app-transactions-section',
  templateUrl: './transactions-section.component.html',
  styleUrls: ['./transactions-section.component.css']
})
export class TransactionsSectionComponent {
 @Input() transactions:Transaction[] = [];
}
