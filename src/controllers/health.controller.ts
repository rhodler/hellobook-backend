import { Controller, Get } from '@nestjs/common';
import { HttpResponse } from 'src/application/http/http-response';

@Controller('/health')
export class HealthController {
    constructor() { }

    @Get()
    async getHealth(): Promise<HttpResponse<{ status: string }>> {
        return HttpResponse.success({ status: `All Systems Operational` });
    }
}
