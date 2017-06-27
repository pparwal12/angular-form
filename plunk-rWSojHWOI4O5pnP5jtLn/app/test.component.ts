import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'test',
    templateUrl: 'test.component.html',
})
export class TestComponent {
    @Input('group1')
    public testForm: FormGroup;
}