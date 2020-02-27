import { LightningElement, wire } from "lwc";
import {
  subscribe,
  unsubscribe,
  APPLICATION_SCOPE,
  MessageContext
} from "lightning/messageService";

import TESTMC from "@salesforce/messageChannel/TestMessageChannel__c";

export default class LwcMessageServiceSub extends LightningElement {
  @wire(MessageContext)
  messageContext;

  subscription = null;
  receivedMessage;

  subscribeMC() {
    if (this.subscription) {
      return;
    }
    this.subscription = subscribe(
      this.messageContext,
      TESTMC,
      message => {
        this.handleMessage(message);
      },
      { scope: APPLICATION_SCOPE }
    );
  }

  unsubscribeMC() {
    unsubscribe(this.subscription);
    this.subscription = null;
  }

  handleMessage(message) {
    this.receivedMessage = message
      ? JSON.stringify(message, null, "\t")
      : "no message payload";
  }
}
