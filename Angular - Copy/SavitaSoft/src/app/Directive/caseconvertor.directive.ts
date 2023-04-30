import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector : '[caseconvertor]'
})
export class CaseConvertorDirective{
    @Input('caseconvertor') case : string = "upper";

    constructor(private elRef : ElementRef){}

    @HostListener('keyup') onKeyUp(){
        let txt : string = this.elRef.nativeElement.value;

        if(this.case === "upper")
          this.elRef.nativeElement.value=txt.toUpperCase();

        else if(this.case === "lower")
          this.elRef.nativeElement.value=txt.toLowerCase();
          
        else if(this.case == "title"){
            let str : string[] = txt.split(" ");

            for(let i=0; i<str.length; i++){
                str[i] = str[i].charAt(0).toUpperCase()+str[i].substring(1).toLowerCase();
            }
            this.elRef.nativeElement.value = str.join(" ");
        }  
    }

    
}