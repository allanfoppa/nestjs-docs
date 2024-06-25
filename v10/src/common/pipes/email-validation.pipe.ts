import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class EmailValidationPipe implements PipeTransform<string> {
  transform(value: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      throw new BadRequestException('Invalid email format');
    }
    return value;
  }
}

// Way to use in controller

// @Post('register')
// registerUser(@Body('email', EmailValidationPipe) email: string) {
//   // Email is validated by the custom pipe
//   // Controller logic
// }
