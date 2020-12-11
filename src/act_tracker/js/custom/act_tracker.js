
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
function getSearchFields()
{
	var res="";
	var fields=document.getElementsByClassName('EDIT');
	for (var i=0;i<fields.length;i++)
	{
		if ((fields[i]!=null)&&(fields[i].value!=""))
		{
			var _capt=document.getElementById("_Capt"+fields[i]	.id);
			if (_capt!=null)
			{
				if (fields[i].tagName=="SELECT")
				{
					var _displayvalue=crm.getTrans(fields[i].id,fields[i].value);
					if (fields[i].value=="sagecrm_code_all")
						_displayvalue="All";
					res+=_capt.innerText+ " "+ _displayvalue +'\n';
				}else{
					res+=_capt.innerText+ " "+ fields[i].value+'\n';
				}

			}
		}
	}
	return res;
}

crm.ready(function() {
    var _exportbtn=document.getElementById("Button_Export");
	if (_exportbtn!=null)
	{
		var _strhref=new String(_exportbtn.href);
		var _stronclick=new String(_exportbtn.getAttribute("onclick"));
		if (_stronclick.indexOf(".submit")>0)
		{
			var _searchEntity=SELECTMenuOption.options[SELECTMenuOption.selectedIndex].text;
			_exportbtn.setAttribute("onclick","javascript:_logUserActivity('Export to File: "+_searchEntity+"',getSearchFields());"+_stronclick);
		}else{
			_strhref=_strhref.replace("document.EntryForm.submit();","ExportToFileClicked();document.EntryForm.submit();");
			_exportbtn.href=_strhref;
		}
		console.log('act_tracker button found');	
	}else{
		console.log('act_tracker button NOT found');
	}

});
