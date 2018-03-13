var source;
var count;
var clone_node;
var parent;
var j=0;
var dup_source;
var parameter_name;
function repeatTemplate() {
	
	source=document.querySelectorAll("[my-repeat]")[0];
	console.log(source);
	dup_source=source;
	count=source.getAttribute("my-repeat");	
	if(count=="all")
	{
		
		parameter_name=source.children[0].innerHTML.substring(0,source.children[0].innerHTML.indexOf("."));
		count=window[parameter_name].length;
	}	
	else
	{
		parameter_name=source.children[0].innerHTML.substring(0,source.children[0].innerHTML.indexOf("."));
		count=window.parseInt(count);
		console.log(count);
	}	
	parent=source.parentNode.parentNode;
	for(i=0;i<count;i++)
	{
		repeat();
		j=j+1;
	}
	//remove child from tbody		
	parent.children[0].removeChild(parent.children[0].children[1]);	
	j=0;
}
function repeat()
{
	clone_node=source.cloneNode(true);	
	var m=0;
	for(var key in window[parameter_name][j])
	{
		clone_node.children[m].innerHTML=window[parameter_name][j][key];
		m=m+1;
	}		
	console.log();	
	parent.appendChild(clone_node);
}