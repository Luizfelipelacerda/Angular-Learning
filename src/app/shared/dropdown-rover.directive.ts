import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown-rover]'
})
export class DropdownRoverDirective{
    @HostBinding('class.open') isOpen = false;
    @HostListener('mouseover') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}