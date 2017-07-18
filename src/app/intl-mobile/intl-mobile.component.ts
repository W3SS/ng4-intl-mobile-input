import { Component, ElementRef, ViewChild, Input } from '@angular/core';

declare var jQuery: any, intlTelInput: any, intlTelInputUtils: any;

@Component({
  selector: 'app-intl-mobile',
  templateUrl: './intl-mobile.component.html',
  styleUrls: ['./intl-mobile.component.css']
})
export class IntlMobileComponent{

  private phoneNum = "";
	private el: HTMLElement;
	private elInput;
    constructor(el: ElementRef) {
    	this.el = el.nativeElement;
    }
    ngAfterViewInit() {
    	this.elInput = jQuery(this.el).find('.ng2intltelinput');
	    this.elInput.intlTelInput();
    }
    private _getNumber(){
    	return this.elInput.intlTelInput('getNumber').replace(/[^\d]/, '');
    }
	getNumber(){
		var _phoneNum = this._getNumber();
		var _isValid = this.validator();
		if (_isValid){
			this.phoneNum = _phoneNum;
			this.elInput.css("border", "1px solid #00FF00");
			console.log(_phoneNum);
			return _phoneNum;
		}
		else {
			console.log('Invalid');
			this.elInput.css("border", "1px solid #FF0000");
			return 'Invalid';
		}
	}
	setNumber(sVal){
		this.elInput.intlTelInput('setNumber', sVal);
	}
	setCountry(sVal){
		this.elInput.intlTelInput('setCountry', sVal);	
	}
	validator(){
		var _phoneNum = this._getNumber();
		if (_phoneNum.length > 0) {
            return this.elInput.intlTelInput("isValidNumber");
        } else {
            return false;
        }
    }
}
