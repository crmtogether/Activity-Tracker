<!-- #include file ="eWareNoHist.js" -->
<%

//create communication
var cdate = new Date();
var new_comm = eWare.CreateRecord( "Communication" );
new_comm("Comm_Type") = "Task";
new_comm("Comm_Action") = "ToDo";
new_comm("Comm_Subject") = Request.Form("subject");	
new_comm("Comm_description") = Request.Form("subject");
new_comm("Comm_note") = Request.Form("note");	
new_comm("Comm_Status") = "Complete";	
new_comm("Comm_datetime") = cdate.getVarDate();
new_comm("Comm_Priority") = "Normal";
new_comm("Comm_ChannelId" ) = CRM.GetContextInfo("user","user_primarychannelid");
new_comm.SaveChanges();	

//create comm link 
var new_link = eWare.CreateRecord( "Comm_Link" );	   
new_link("CmLi_Comm_userId" ) = CRM.GetContextInfo("user","user_userid");
new_link("CmLi_Comm_CommunicationId" ) = new_comm.RecordId;
new_link.SaveChanges();

Response.Clear();
Response.Write("Success");
%>