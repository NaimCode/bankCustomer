
export interface Customer{
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    gender:string,
    address:string,
    //
    image?:string,
    amount?:number,

    createdAt?:Date,
    updatedAt?:Date,


}