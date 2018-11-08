class Employe {
    epid:number;
    epname:string;
    constructor(values:object={})
    {
    Object.assign(this,values);
     console.log(this.epid);
     console.log(this.epname);
    
    
    }
}
let ep:Employe=null;
ep=new Employe({epid:"101",epname:"vishal"});