import { Profile } from "./profile.model"

export interface UserModel
{
 login : string,
 profile : Profile,
 lastName: string,
 firstName : string,
 email : string,
 function? : string,
 password? : string,
 status : number,
 isAd : number
}
