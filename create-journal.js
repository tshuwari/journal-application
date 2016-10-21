<script type = "text/javascript">
$('.create-journal').click(function(){
   var title = $('popup-journal-title').val();
   var description = $('popup-journal-description').val();

   $.ajax({
     "type": "get",
     "data": {jtitle: title, desc: description},
     "url": "/create-journal",
     success: function(recievedData)
     {
       if(recievedData.status == "successful")
       {
         //update UI
         return;
       }

       $('.j-creation-field').html("Sorry your Journal creation was not successful. Please try again.");
     }
   });
 });
</script>