import { ConfigService } from '@nestjs/config';

export const PORT = (app: any) => app.get(ConfigService).get('port');
