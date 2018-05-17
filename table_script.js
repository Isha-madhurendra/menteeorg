function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";

 var name=document.getElementById("name_row"+no);
 var comments=document.getElementById("comments_row"+no);
 var ratings=document.getElementById("ratings_row"+no);

 var name_data=name.innerHTML;
 var comments_data=comments.innerHTML;
 var ratings_data=ratings.innerHTML;

 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 comments.innerHTML="<input type='text' id='comments_text"+no+"' value='"+comments_data+"'>";
 ratings.innerHTML="<input type='text' id='ratings_text"+no+"' value='"+ratings_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var comments_val=document.getElementById("comments_text"+no).value;
 var ratings_val=document.getElementById("ratings_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("comments_row"+no).innerHTML=comments_val;
 document.getElementById("ratings_row"+no).innerHTML=ratings_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_comments=document.getElementById("new_comments").value;
 var new_ratings=document.getElementById("new_ratings").value;

 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='comments_row"+table_len+"'>"+new_comments+"</td><td id='ratings_row"+table_len+"'>"+new_ratings+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_comments").value="";
 document.getElementById("new_ratings").value="";
}
