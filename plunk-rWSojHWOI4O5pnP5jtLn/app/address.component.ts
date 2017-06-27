import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from './customer.interface';
@Component({
    moduleId: module.id,
    selector: 'address',
    templateUrl: 'address.component.html',
})
export class AddressComponent {
    @Input('group')
    public adressForm: FormGroup;
    
    constructor(private _fb: FormBuilder) { }
    
     ngOnInit() {
    //     this.adressForm = this._fb.group({
    //         street : ['abc', [Validators.required, Validators.minLength(5)]],
    //         postcode : [''],
    //         tests: this._fb.array([])
    //     });
    //     console.log(this.adressForm);
    //     // add address
         this.addTest();
        
    //     /* subscribe to addresses value changes */
    //     // this.myForm.controls['addresses'].valueChanges.subscribe(x => {
    //     //   console.log(x);
    //     // })
     }
    
    initTest() {
        return this._fb.group({
            test : ['', Validators.required]
          
        });
    }

    addTest() {
        const control = <FormArray>this.adressForm.controls['tests'];
        const addrCtrl = this.initTest();
        
        control.push(addrCtrl);
        
        /* subscribe to individual address value changes */
        // addrCtrl.valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    }

  
    removeTest(i: number) {
        const control = <FormArray>this.adressForm.controls['tests'];
        control.removeAt(i);
    }

    save(model: Customer) {
        // call API to save
        // ...
        console.log(model);
    }

}