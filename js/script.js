var story_heading = "";
var storyid = "";
var i = 0;
var storydiv = "";
$(document).ready(function () {
    $('.searchmodalcontent').load('/pages/searchmodal.html');
    $.get('resources/stories.xml', function (d) {
        $(d).find('story').each(function () {
            storyid = "storyid" + i++;
            storydiv = "<div class='col-sm-4 storycontainer'><div class='story' id='" + storyid + "'><div class='transbox'></div></div></div>";
            $(".storycontents").append(storydiv);
            $("#"+storyid).css("background-image","url("+$(this).find('bg_image').text()+")");
            $("#"+storyid+" div").html("<h2 class='story_heading'>"+$(this).find('story_heading').text()+"</h2><span class='datetime'>"+$(this).find('datetime').text()+"</span>");
            $("#"+storyid+" div").append("<div>"+$(this).find('intro').text()+"</div>");
            $("#"+storyid+" div div").append("<div class='readmore'>Click to Read More...</div>");
        });
    });
});