import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

/**
 * Registering this component to used to provide a ControlValueAccessor for this form controls.
 */
const CUSTOM_SPLIT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SplitButtonComponent),
    multi: true
};

@Component({
  selector: 'split-button',
  templateUrl: 'p-split-button.component.html',
  providers: [CUSTOM_SPLIT_VALUE_ACCESSOR]
})

export class SplitButtonComponent implements OnInit {
  // Form Control(Reactive Form) for p-autocomplete drop-down
  buttonControl: FormControl;
  // Contain all options which need to show in split buttons
  @Input() options = [];

  @Input() required = false;
  // If options is array of object then 
  // label show key which need to display in view
  @Input() label;
  // value show the key which need as returned value
  @Input() value;
  // Wheather the input is single select or multi select
  @Input() multiple = false;
  // Wheather the input disabled or not
  @Input() disabled = false;
  // Keeps reference of a callback that is return in registerOnChange method
  onChange: any = () => { };
  //Keeps reference of a callback that is return in registerOnTouched method
  onTouched: any = () => { };

  ngOnInit() {
    // initialize form control
    if (this.required) {
      this.buttonControl = new FormControl([], [Validators.required]);
    } else {
      this.buttonControl = new FormControl([]);
    }

    // subscribe control changes
    this.buttonControl.valueChanges.subscribe(data => {
      // update change value in parent form control
      this.onChange(data);      
    });
  }

  writeValue(value) {
    if (value) {
      this.buttonControl.setValue(value);
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  isChecked(value) {
    if (this.value) {     
      return (this.buttonControl.value.indexOf(value[this.value]) > -1);
    } else {
      return (this.buttonControl.value.indexOf(value) > -1);
    }
  }
}
