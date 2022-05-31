//export class Training{
   // constructor(public Name:string,public Slots:string, public Time:string){
    //this.Name=Name;
    //this.Slots=Slots;
    //this.Time=Time;
    //}   
//}
export class Training{
    Id : string = '';
    Name : string = '';
    Slots : string ='';
    Time : string = '';
       
}

export class Auth{
    constructor(public username:string,public password:string){

    this.username=username;
    this.password=password;
    }   
}