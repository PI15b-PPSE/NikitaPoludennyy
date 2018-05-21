$(document).ready(function(){
    $('a').click(function(e){
        e.preventDefault();
		var path_picture = $(this).data('arg1');
		var path_music1 = $(this).data('arg2');
		var path_music2 = $(this).data('arg3');
		var path_music3 = $(this).data('arg4');
		var path_music4 = $(this).data('arg5');
		var path_music5 = $(this).data('arg6');
		var path_music6 = $(this).data('arg7');
		document.getElementById("pic").src = path_picture;
		play_sound(path_music1);
		play_sound(path_music2);
		play_sound(path_music3);
		play_sound(path_music4);
		play_sound(path_music5);
		play_sound(path_music6);
		
	});

	function play_sound(path_m)
	{
		var snd = new Audio(path_m);
		snd.preload = "auto";
		snd.play();
	}

});