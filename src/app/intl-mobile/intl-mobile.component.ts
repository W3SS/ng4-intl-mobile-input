import { Component, ElementRef, ViewChild, Input, HostListener } from '@angular/core';

declare var jQuery: any, intlTelInput: any, intlTelInputUtils: any;

@Component({
  selector: 'app-intl-mobile',
  templateUrl: './intl-mobile.component.html',
  styleUrls: ['./intl-mobile.component.css']
})
export class IntlMobileComponent{

  public phoneNum = "";
  	private validmsg: any;
	private errormsg: any;
	private el: HTMLElement;
	private elInput;
    constructor(el: ElementRef) {
    	this.el = el.nativeElement;
	}
	
	@HostListener('document:keyup', ['$event'])
	onKeyUp(ev: KeyboardEvent) {
		// do something meaningful with it
		console.log(`The user just pressed ${ev.key}!`);
		this.getNumber();
	}

    ngAfterViewInit() {
    	this.elInput = jQuery(this.el).find('.intl-mobile');
		this.validmsg = jQuery(this.el).find('#valid-msg');
		this.errormsg = jQuery(this.el).find('#error-msg');
		this.elInput.intlTelInput();
    }
    private _getNumber(){
    	return this.elInput.intlTelInput('getNumber').replace(/[^\d]/, '');
    }
	getNumber() {
		let _phoneNum = this._getNumber();
		let _isValid = this.validator();
		if (_isValid) {
			this.phoneNum = _phoneNum;
			this.elInput.css("border", "1px solid #00FF00");
			this.validmsg.removeClass("hide");
			this.errormsg.addClass("hide");
			console.log(_phoneNum);
			return _phoneNum;
		}
		else {
			console.log('Invalid');
			this.elInput.css("border", "1px solid #FF0000");
			this.errormsg.removeClass("hide");
			this.validmsg.addClass("hide");
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
