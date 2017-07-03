var getVideos = function getVideos(){
  $.ajax({
    url: 'http://hackesta.pythonanywhere.com/youtube/videos/?format=json&channel_id=UCkY84dbj67kYo9UUR8tVkCg',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json){

      $(json.videos).each(function(index){
        $("#videos_container").append('<iframe id="ytplayer" type="text/html" class="4u 12u$(small)" style="float:none;" width="640" height="360" src="https://www.youtube.com/embed/'+this.video_id+'?autoplay=0&origin=http://hackesta.org" frameborder="0"></iframe>');
        //$("#loading").css('display', 'none');
      });
    }
  });
};
