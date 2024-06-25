import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseBooleanToStrintPipe implements PipeTransform<boolean, string> {
  transform(value: boolean, metadata: ArgumentMetadata): string {
    if (value == true) return 'true';
    else return 'false';
  }
}
