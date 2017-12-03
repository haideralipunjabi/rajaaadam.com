var getVideos = function getVideos(){
  $.ajax({
    url: '/api/youtube/videos/?format=json&channel_id=UCkY84dbj67kYo9UUR8tVkCg',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json){

      $(json.videos).each(function(index){
        $("#videos_container").append('<div class="4u 12u$(medium)"><iframe id="ytplayer" type="text/html" style="float:none; margin-bottom: 10px;" width="100%" height="360" src="https://www.youtube.com/embed/'+this.video_id+'?autoplay=0&origin=http://hackesta.org" frameborder="0"></iframe><a href="'+this.download_url+'" class="button icon fa-download">Save link as to download<div></div></a></div>');
        //$("#loading").css('display', 'none');
      });
    }
  });
};
