import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';
import { ConfigService } from '@nestjs/config';

@Module({
    providers:[ AxiosAdapter ],
    exports:[ AxiosAdapter ],
})
export class CommonModule {}
