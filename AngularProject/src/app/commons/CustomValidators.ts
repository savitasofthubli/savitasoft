import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors } from "@angular/forms";
import { RegistrationService } from "../services/registration.service";

export class CustomValidators 
{

    public static registrationExist(service : RegistrationService) : AsyncValidatorFn 
    {
        return function(fc : AbstractControl) : Promise<ValidationErrors | null>
        {
                    let data : string = (fc as FormControl).value as string
                    return new Promise((resolve)=>{
                                                    service.getRegistrationByPhone(data,(res : any)=>
                                                    {
                                                        if(res){
                                                            resolve({RegistrationExist : true})
                                                        }else{
                                                            resolve(null);
                                                        }
                                                    })
                    })
        }
    }
}