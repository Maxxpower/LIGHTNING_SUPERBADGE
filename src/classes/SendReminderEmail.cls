global class SendReminderEmail implements Database.Batchable<sObject> {

	String query;
	String subject;
	String body;

	global SendReminderEmail(String query,String subject,String body) {
		this.query = query;
		this.subject = subject;
		this.body = body;
	}

	global Database.QueryLocator start(Database.BatchableContext BC) {
		return Database.getQueryLocator(query);
	}

  global void execute(Database.BatchableContext BC, List<Speaker__c> scope) {
			for (Speaker__c speaker : scope) {
        EmailManager.sendMail(speaker.Email__c, this.subject, this.body);
    }
	}

	global void finish(Database.BatchableContext BC) {

	}

}