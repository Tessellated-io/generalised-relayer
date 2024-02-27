import { Body, Controller, Post } from '@nestjs/common';
import { Store } from 'src/store/store.lib';
import { PrioritiseMessage } from 'src/store/types/store.types';

@Controller()
export class SubmitterController {
  @Post('prioritiseAMBMessage')
  async prioritiseAMBMessage(@Body() body: PrioritiseMessage) {
    //TODO check if the submitter is enabled
    //TODO currently this causes the relayer to try and deliver the message twice (one standard, one priority)
    //TODO schema validate request
    const store = new Store();
    await store.prioritiseMessage(
      body.sourceChainId,
      body.destinationChainId,
      body.messageIdentifier,
      body.amb,
    );
  }
}
