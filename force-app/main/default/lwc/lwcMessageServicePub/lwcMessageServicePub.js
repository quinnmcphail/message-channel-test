import { LightningElement, wire } from "lwc";
import { publish, MessageContext } from "lightning/messageService";

import TESTMC from "@salesforce/messageChannel/TestMessageChannel__c";

export default class LwcMessageServicePub extends LightningElement {
  @wire(MessageContext)
  messageContext;

  handleClick() {
    const message = {
      subject: "test subject",
      body: "test body"
    };
    publish(this.messageContext, TESTMC, message);
  }
}
