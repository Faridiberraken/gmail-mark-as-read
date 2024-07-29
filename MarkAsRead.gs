/**
 * @author Farid Iberraken
 * @notice Mark all unread emails as read. (Done mail by mail)
 */
function markAsRead() {
    var threads = GmailApp.search(" is:unread");
    for(var i =0; i < threads.length;i++)
    {
      var thread = threads[i];
      var messages = thread.getMessages();
      //Logger.log("i= " + i);
      for (var j = 0; j < messages.length; j++) {
        //Logger.log(j + " : " + messages[j].getSubject());
        GmailApp.markMessageRead(messages[j]);
      }
    }
}