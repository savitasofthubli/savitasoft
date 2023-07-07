export interface Course{
    id : number,
    name : string,
    fees: number,
    duration : number
}

export interface Registration{
    id : number,
    registrationDate : Date,
    name : string,
    phoneNumber : string,
    email : string,
    address : string,
    whatsappNumber : string,
    college : string,
    branch : string,
    semester : number,
    password : string,
    parentNumber:string;
}

export interface CourseRegistration{
    id : number,
    courseRegistrationDate : Date,
    registration : Registration,
    course : Course
}

export interface User{
    phone : string,
    password : string
}