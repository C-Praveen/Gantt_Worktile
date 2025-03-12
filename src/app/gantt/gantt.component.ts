import { Component } from '@angular/core';
import { GanttDate, GanttGroup, GanttItem, GanttLinkDragEvent, GanttSelectedEvent } from '@worktile/gantt';

@Component({
  selector: 'app-gantt',
  standalone: false,
  templateUrl: './gantt.component.html',
  styleUrl: './gantt.component.scss'
})
export class GanttComponent {
  items: GanttItem[] = [
    { id: '000000', title: 'Task 0', start: 1627729997, end: 1628421197, expandable: true },
    { id: '000001', title: 'Task 1', start: 1617361997, end: 1625483597, links: ['000003', '000004', '0000005'], expandable: true },
    { id: '000002', title: 'Task 2', start: 1610536397, end: 1610622797 },
    { id: '000003', title: 'Task 3', start: 1628507597, end: 1633345997, expandable: true },
    { id: '000004', title: 'Task 4', start: 1627729997, end: 1628421197, expandable: true },
    { id: '000005', title: 'Task 5', start: 1617361997, end: 1625483597, links: ['000006', '000007', '000008'], expandable: true },
    { id: '000006', title: 'Task 6', start: 1610536397, end: 1610622797 },
    { id: '000007', title: 'Task 7', start: 1628507597, end: 1633345997, expandable: true },
    { id: '000008', title: 'Task 8', start: 1627729997, end: 1628421197, expandable: true },
    { id: '000009', title: 'Task 9', start: 1617361997, end: 1625483597, links: ['000008', '000010', '000011'], expandable: true },
    { id: '000010', title: 'Task 10', start: 1610536397, end: 1610622797 },
    { id: '000011', title: 'Task 11', start: 1628507597, end: 1633345997, expandable: true }
  ];

  constructor() {}
  
  selectedChange(event: GanttSelectedEvent) {}
  

}
