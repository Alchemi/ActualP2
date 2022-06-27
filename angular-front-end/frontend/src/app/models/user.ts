import { Address } from "./address";

export interface User{
    userid: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    contactnumber:string;
    role:string;
    address:Address;
}