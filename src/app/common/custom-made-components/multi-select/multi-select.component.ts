import { Component, Input, AfterViewInit, ElementRef, OnInit, Output, EventEmitter, ViewChild, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('multiselectcs', { static: true }) selectPanelRef: ElementRef;

  @Input() label: any = 'Select';
  @Input() options: any = [];
  @Input() selectAll = false;

  @Output() onSelectionChange: EventEmitter<any> = new EventEmitter(null);

  optionsObjs = [];
  hidePanel = true;
  panelWidth = '';
  selectedList = [];
  selectPreview = '';



  constructor(private elementRef: ElementRef) {

  }
  ngOnInit(): void {
    this.parseOptions();
    if (this.selectAll) {
      this.selectPreview = 'All';
    }
    this.addClickOutsideListener();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {

      let ele = this.elementRef.nativeElement.querySelector('.select-view');
      console.log("----: ", ele)
      this.panelWidth = ele.offsetWidth + 'px';
      console.log("this will be width: ", ele.offsetWidth)
    });
  }

  parseOptions() {
    this.options?.forEach(item => {
      this.optionsObjs.push({ 'value': item, 'checked': this.selectAll });
    })
    console.log("options: ", this.options)
    console.log("optionsObjs: ", this.optionsObjs)
  }

  togglePanel() {
    this.hidePanel = !this.hidePanel;
  }



  selectValue(op) {
    op.checked = !op.checked;
    this.selectedList = [];
    this.optionsObjs.filter(ob => {
      if(ob.checked){
        this.selectedList.push(ob.value);
      }
    });
    console.log("selection list: ", this.selectedList);
    this.selectPreview = this.selectedList.join(',');
    if (this.selectedList.length == this.options.length) {
      this.selectPreview = 'All';
      this.onSelectionChange.emit({ 'selectAll': true, 'list': [] })
    } else {
      this.onSelectionChange.emit({ 'selectAll': false, 'list': this.selectedList })
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.selectPanelRef.nativeElement.contains(event.target)) {
      // Click happened outside the select
      this.hidePanel = true;
    }
  }

  private addClickOutsideListener() {
    document.addEventListener('click', this.onClick.bind(this));
  }

  private removeClickOutsideListener() {
    document.removeEventListener('click', this.onClick.bind(this));
  }

  ngOnDestroy(): void {
    this.removeClickOutsideListener();
  }
}
