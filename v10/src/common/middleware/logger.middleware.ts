import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    function isEmpty(obj: object): boolean {
      return Object.keys(obj).length === 0;
    }

    let URL = `URL: ${req.url}\n`;
    let METHOD = `METHOD: ${req.method}\n`;
    let BODY = req.body ? `BODY: ${JSON.stringify(req.body, null, 2)}\n` : 'BODY: -\n';
    let PARAM = !isEmpty(req.params) ? `PARAM: ${JSON.stringify(req.params, null, 2)}\n` : 'PARAM: -\n';
    let QUERY = !isEmpty(req.query) ? `QUERY: ${JSON.stringify(req.query, null, 2)}\n` : 'QUERY: -\n';
    let CALL_AT = `DATE: ${new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()}`;

    console.log('Request info \n', URL, METHOD, BODY, PARAM, QUERY, CALL_AT);
    next();
  }
}
