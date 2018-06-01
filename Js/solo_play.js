/**
* Обработка нажатия
* Первый аргумент адрес воспроизводимого звука
* Вызов для звука функции воспроизведения
*/
$(document).ready(function(){
    $('button').click(function(e){
        e.preventDefault();
		var path_music = $(this).data('arg');
		play_sound(path_music);
	});

/**
* Функция воспроизведения звука по пути {path_m}
* Создание объекта snd - класса Audio с передаваемым аргументом path_m
* Установка режима предзагрузки - auto
* Воспроизведение звука
*/
	function play_sound(path_m){
	    var snd = new Audio(path_m);
	    snd.preload = "auto";
	    snd.play();
	}

});