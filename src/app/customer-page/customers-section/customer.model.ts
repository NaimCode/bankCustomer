
export interface Customer{
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    gender:string,
    address:string,
    //
    image?:string,
    balance?:number,

    createdAt?:Date,
    updatedAt?:Date,


}