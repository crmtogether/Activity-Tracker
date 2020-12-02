
function _logUserActivity(sub, note)
{
	var _url = crm.url("act_tracker/createcomm.asp");
	var _data={subject:sub,note:note};
	$.ajax({
        type: "post",
        url: _url,
		dataType: "text",
		contentType: "application/x-www-form-urlencoded",
        data: _data,
        async: false,
        error: function (request, error, status) {
            console.log("ERROR tracker : " + error + "\nStatus:" + status + "\nData:" + request.responseText);
        },
        success: function (requestresult) {
			console.log("tracker success");
        } // End success
    }); // End ajax method	
}

function ExportToFileClicked(e)
{
	var groupName=document.getElementById("_HIDDENReportName").value;
	_logUserActivity("Export to File", groupName);
}

crm.ready(function() {
	
    var _exportbtn=document.getElementById("Button_Export");
	if (_exportbtn!=null)
	{
		var _strhref=new String(_exportbtn.href);
		_strhref=_strhref.replace("document.EntryForm.submit();","ExportToFileClicked();document.EntryForm.submit();");
		_exportbtn.href=_strhref;
	}
});
