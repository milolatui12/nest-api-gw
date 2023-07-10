import { IsEmail, IsNotEmpty } from 'class-validator'

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    username: String

    @IsNotEmpty()
    password: String
}