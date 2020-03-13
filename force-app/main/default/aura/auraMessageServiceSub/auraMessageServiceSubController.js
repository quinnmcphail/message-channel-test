({
  onMessage: function(cmp, message, helper) {
    if (message != null) {
      cmp.set("v.message", JSON.stringify(message, null, "\t"));
    }
  }
});
