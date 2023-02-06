import { Component, OnInit } from '@angular/core';
import { SavitasoftService } from '../savitasoft.service';

export interface Register{
   courseName: string;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  course=[
    {'id':1, 'name':'C language','description':'The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem. DSA is a variant of the Schnorr and ElGamal signature schemes.','image':'../../assets/c2.png'},
    {'id':2, 'name':'C++','description':'The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem. DSA is a variant of the Schnorr and ElGamal signature schemes.','image':'../../assets/cplusplus.jpg'},
    {'id':3, 'name':'Data Structures','description':'The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem. DSA is a variant of the Schnorr and ElGamal signature schemes.','image':'../../assets/datastructures.jpg'},
    {'id':4, 'name':'JAVA','description':'The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem. DSA is a variant of the Schnorr and ElGamal signature schemes.','image':'../../assets/java.jpg'},
    {'id':5, 'name':'.NET','description':'The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem. DSA is a variant of the Schnorr and ElGamal signature schemes.','image':'../../assets/net.jpg'},
    {'id':6, 'name':'Oracle','description':'The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem. DSA is a variant of the Schnorr and ElGamal signature schemes.','image':'../../assets/oracle.jpg'},
    {'id':7, 'name':'Android','description':'The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem. DSA is a variant of the Schnorr and ElGamal signature schemes.','image':'../../assets/android.jpg'},
    {'id':8, 'name':'MS Office','description':'The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem. DSA is a variant of the Schnorr and ElGamal signature schemes.','image':'../../assets/msoffice.jpg'},
    {'id':9, 'name':'Micro Processor','description':'The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem. DSA is a variant of the Schnorr and ElGamal signature schemes.','image':'../../assets/microp.jpg'},
    {'id':10, 'name':'Micro Controller','description':'The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem. DSA is a variant of the Schnorr and ElGamal signature schemes.','image':'../../assets/microc.jpg'},

  ]
  course2=[
    {'id':11, 'name':'Diploma in Computer Application','description':'The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem. DSA is a variant of the Schnorr and ElGamal signature schemes.','image':'../../assets/ca.jpg'},
    {'id':12, 'name':'Diploma in Client Server Computing','description':'The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem. DSA is a variant of the Schnorr and ElGamal signature schemes.','image':'../../assets/client.jpg'},
    
  ]

  register:Register[]=[];

    constructor(private registerService:SavitasoftService){}

    public onClick(data:string)
    {
      console.log(data);
      
      this.registerService.postDetails(data,(retval:string)=>{
        console.log(retval);
        alert("Created account successfully");
      })

    }

}
