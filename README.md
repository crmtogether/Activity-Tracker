# Activity-Tracker
Code showing how you can track activity in Sage CRM that normally you cannot-to be used as a template

This Sage CRM component installs a file  in the "js/custom" folder and this is loaded on every page. The javascript in here loks for the "Export to File" button and attaches a ajax call to the custompagesact_tracker/createcomm.asp page. This records a communication against that user noting the group that is being exported.

This could be extended to also track other user activity.

