// libray
(function($) {
  $.fn.getNumbByPx = function(css) {
    var Css = $(this).css(css);
    var length = Css.length;
    var numb = Number(Css.slice(0, (length - 2)));
    return numb;
  },

  $.fn.disable = function() {
    return this.each(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active")
      }
      $(this).addClass("disable");
    });
  },

  $.fn.active = function(s) {
    return this.each(function() {
      if ($(this).hasClass("disable")) {
        $(this).removeClass("disable");
      }
      if (s) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }
  $.fn.scale = function(x) {
  if(!$(this).filter(':visible').length && x!=1)return $(this);
  if(!$(this).parent().hasClass('scaleContainer')){
    $(this).wrap($('<div class="scaleContainer">').css('position','relative'));
    $(this).data({
      'originalWidth':$(window).width(),
      'originalHeight':$(window).height()
    });
  }
  $(this).css({
    'transform': 'scale('+x+')',
    '-ms-transform': 'scale('+x+')',
    '-moz-transform': 'scale('+x+')',
    '-webkit-transform': 'scale('+x+')',
    'transform-origin': '0 0',
    '-ms-transform-origin': '0 0',
    '-moz-transform-origin': '0 0',
    '-webkit-transform-origin': '0 0',
  });
  if(x==1){
    $(this).unwrap().css('position','static');
  }
  else{
    $(this).parent()
      .width($(this).data('originalWidth'))
      .height($(this).data('originalHeight'));
  }
  return $(this);
};
}(jQuery));


var N = 0;

var App = (function(app) {
  /**
   * init variables
   */
  app.Variables = {};
  /**
   * 
   */
  app.Variables.preload = null;
  /**
   * 
   */
  app.Variables.N = 0;
  app.Variables.isStartAll = false;
  /**
   * init map
   */
  app.Variables.map = {
    count_box: 1,
    box: 10,
    bg: ""
  };

  /**
   * 
   */
  app.Variables.load = {};
  app.Variables.load.animationstart = $("#load");
  app.Variables.load.process = $("#process");
  app.Variables.load.span = app.Variables.load.animationstart.children("span");
  /**
   * init sound
   */
  app.Variables.sound = {
    count_sound: 0
  };
  /**
   * bg sound 
   */
  app.Variables.bg_sound = null;
  /**
   * init setinterval
   */
  app.Variables.setInterval = {
    event_listen: "",
    load_percent: "",
    time: 1
  };

  /**
   * init width of screen
   */
  app.Variables.screen = 996;

  /**
   * audio learn
   */
  app.Variables.audio_learn;

  /**
   * Data server
   */
  app.Variables.Data = {
    _data: "",
    _listR: "",
    _listW: ""
  };

  app.Variables.rnd;

  /**
   * figure
   */
  app.Variables.figure;

  app.Variables.width_window = $(window).width();
  app.Variables.learn_item;
  app.Variables.question = $(".bg--question__item");;
  
  return app
}(App || {}));

var App = (function(app) {

  // Create Log Module
  app.Log = {
    enable: false
  };

  //Check if Log is Enabled
  app.Log.isEnabled = function() {
    return this.enable;
  };

  //Write log to console
  app.Log.write = function(content, prefix) {
    var _prefix = prefix || "Default Logging";
    if (this.enable) {
      console.log("---BEGIN " + _prefix + "---");
      console.log(content);
      console.log("---END " + _prefix + "---");
    }
  };

  //Write log string in one line
  app.Log.writeString = function(content, prefix) {
    var _prefix = prefix || "Log Tag: ";
    if (this.enable) {
      console.log(_prefix + " : " + content);
    }
  };

  //Write method log
  app.Log.writeMethod = function(name) {
    if (this.enable) {
      console.log("[ Method Logging ] ---" + name + "()");
    }
  }

  //Method aliases
  app.Log = {
    w: app.Log.write,
    ws: app.Log.writeString,
    m: app.Log.writeMethod
  };

  return app;

}(App || {}));
var App = (function(app) {

  //init HTTP object
  app.Http = {};

  //Send Post
  app.Http.post = function(targetUrl, requestData, successCallback, failureCallback) {
    $.ajax({
      url: targetUrl,
      data: requestData,
      type: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: successCallback,
      failure: failureCallback
    });
  };
  //Send Post with data on header request
  app.Http.postHeaders = function(targetUrl, requestData, successCallback, failureCallback) {
    $.ajax({
      url: targetUrl,
      headers: requestData,
      type: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: successCallback,
      failure: failureCallback
    });
  };
  //GET
  app.Http.get = function(targetUrl, successCallback, failureCallback) {
    $.ajax({
      url: targetUrl,
      type: "GET",
      success: successCallback,
      failure: failureCallback
    });
  };

  return app;

}(App || {}));
var App = (function(app) {

  /**
   * Init Constants Object;
   */

  app.Constants = {

  };

  /**
   * Consntant link get Data Respone
   */
  
  app.Constants.linkData0 = './js/data.json';
  app.Constants.linkData = 'https://api.edupia.vn/service/exerciseinfo'; 
  app.Constants.upPoint = "https://api.edupia.vn/service/uppoint";
  
  return app;

}(App || {}));
var App = (function (app) {
  /**
   * Init Services Object;
   */

  app.Services = {

  };

  /**
   * Get Number random between min - max
   */

  app.Services.getNumberRandomBetween = function (max, min) {
    min = min || 0;
    return Math.floor(Math.random() * max) + min;
  };

  /**
   * Update Question of game
   */
  app.Services.UpdateQuestion = function (data) {
    var ques = "";
    
    var txt = "";

    /**
     * convert string to bool
     */
    data.data.game_answers.forEach(function (item) {
      if (typeof item.extend != "boolean") {
        if (item.extend == "true")
          item.extend = true;
        else
          item.extend = false;
      }
    });

    for (var i = 0; i < data.data.game_answers.length; i++) {
      if (data.data.game_answers[i].extend) {
        txt = data.data.game_answers[i].description[0];
        break;
      }
    } 
    var textBefore  = "";
    var quesSplt = data.data.game_question.value.split(' ');
    quesSplt.forEach(function(sp){
      var n = sp.search('"');
      if(n!=-1){
        var t = sp.split('"');
        textBefore += '"<span style="color: red;">' + t[1] + '</span>" ';
      }else{
        textBefore += sp + ' '; 
      }
    });
    /////////////////////
    $("#question").html(textBefore);
    app.Variables.Data._listR = data.data.game_answers.filter(function (c) {
      return c.extend;
    });
    app.Variables.Data._listW = data.data.game_answers.filter(function (c) {
      return !c.extend;
    });
    this.UpdateAnswer(app.Variables.Data._listR, app.Variables.Data._listW);
  };

  app.Services.setAnswer = function (i, a) {
    if (i == 0) {
      i = 3;
    }
    $("#Answer" + i + " img").attr("src", App.Services.getUrlById(a.id));
    $("#Answer" + i + ' p').text(a.description);
    $("#Answer" + i + ' p').attr("attr", a.id);
    $("#Answer" + i).removeClass("bg--true");

    if (a.extend) {
      $("#Answer" + i).addClass("run");
      $("#Answer" + i).removeClass("btn-fail");
    } else {
      $("#Answer" + i).removeClass("run");
      $("#Answer" + i).addClass("btn-fail");
    }
  };

  app.Services.UpdateAnswer = function (listR, listW) {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){

      $(".run").unbind("click");
      $(".btn-fail").unbind("click");
      //App.Variables.question.unbind("click");
    }else{

      $(".run").unbind("click");
      $(".btn-fail").unbind("click");
    }

    if (listR.length == 0) return;

    //lấy random số lượng câu trả lời đúng trong 1 bộ ba answer
    var n = 1;
    if (listR.length > 1 && app.Variables.map.count_box < 10) {
      n = 1;//app.Services.getNumberRandomBetween(1, 1);
    }
    App.Variables.N = n;
    //lấy random vi tri cau dung/sai
    var m = app.Services.getNumberRandomBetween(3, 1);

    app.Log.w(n, "number of ans");
    //neu co 1 câu đúng
    if (n == 1) {
      app.Services.spliceArr(m % 3, listR);

      app.Services.spliceArr((m + 1) % 3, listW);

      app.Services.spliceArr((m + 2) % 3, listW);
      app.Log.w(listW, "list W");
    } else if (n == 2) { //neu co 2 câu đúng
      app.Services.spliceArr(m % 3, listW);

      app.Services.spliceArr((m + 1) % 3, listR);

      app.Services.spliceArr((m + 2) % 3, listR);
      app.Log.w(listW, "list R");
    }
    /**
     * click vào hình ảnh
     */
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
      $(".run").on("click", runClick);
      $(".btn-fail").on("click", btnFailClick);
      //App.Variables.question.one("click",mobileClick);
    }else{
      $(".run").one("click", runClick);
      $(".btn-fail").one("click", btnFailClick);
    }
  };

  app.Services.UpdateLearn = function () {
    if (app.Variables.Data._data == undefined) return;
    //update learn
    var strHtml = "";
    for (var i = 0; i < app.Variables.Data._data.data.game_answers.length; i++) {
      strHtml = strHtml.concat(
        '<div class="col-25 col">' +
        '<div class="bg--learn__item"><img src="' + App.Services.getUrlById(app.Variables.Data._data.data.game_answers[i].id) + '" alt="">' +
        '<p attr="' + app.Variables.Data._data.data.game_answers[i].id + '">' + app.Variables.Data._data.data.game_answers[i].description + '</p>' +
        '</div>' +
        '</div>');
    }
    strHtml += '<div class="clearfix"></div>';
    $(".bg--learn__list-item").html(strHtml);
  };

  /**
   * registerSound
   */
  app.Services.registerSound = function (audio, alias) {
    if(audio == null) return;
    createjs.Sound.registerSound(audio, alias);
  };

  app.Services.registerAllSound = function (data) {
    data.data.game_background_music.forEach(function (item) {
      if (item.word == "jump") {

      } else {

      }
      app.Services.registerSound(item.voice, item.id);
    });

    data.data.game_answers.forEach(function (item) {
      app.Services.registerSound(item.voice, item.id);
    });
  };
  // play audio width name
  app.Services.playSound = function (name, callback) {
    var sound = createjs.Sound.play(name);
    if (name == "jump") {
      sound.volume = 0.1;
    } else {
      sound.volume = 1;
    }
    callback ? callback(sound) : "";
  };

  // splice list item and set answer...
  app.Services.spliceArr = function (m, arr) {
    var item = app.Services.getNumberRandomBetween(arr.length - 1, 0);
    this.setAnswer(m, arr[item]);
    arr.splice(item, 1);
  };
  // isMobile
  app.Services.isMobile = function () {
    if (app.Variables.width_window <= 995) {
      return true;
    }
    return false;
  };
  /**
   * lấy thông tin từ 1 đường link bằng tên sư dụng cách tách chuỗi
   */
  app.Services.getParameterByName = function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  /**
   * get info from current url
   */
  app.Services.GetObjectFromUrl = function()
  {
        var currentURL = document.URL;
        var urlIdExercise = App.Services.getParameterByName("exercise_id",currentURL);
        var urlToken = App.Services.getParameterByName("token",currentURL);
        var urlusername = App.Services.getParameterByName("username",currentURL);
        
        return {username:urlusername,token:urlToken,exerciseid:urlIdExercise};
  }

  /**
   * call json
   */
  app.Services.getDataRes = function (callback, callerr) {
    if(App.jsonKH){
      var dataObj =app.Services.GetObjectFromUrl();
            
      App.Http.postHeaders(app.Constants.linkData,dataObj,
        function (data) {
          App.Log.w(data, 'DATA');
          if (typeof data === "object") {
            callback(data);
          } else {
            callback(JSON.parse(data));
          }
        },
        function (err) {
          App.Log.w(err, 'ERR');
          callerr(err);
        }
      );
    }else{
      App.Http.get(app.Constants.linkData0,
        function (data) {
          App.Log.w(data, 'DATA');
          if (typeof data === "object") {

            callback(data);
          } else {
            callback(JSON.parse(data));
          }
        },
        function (err) {
          App.Log.w(err, 'ERR');
          callerr(err);
        }
      );
    }
  }

  
  // addEventListener support for IE8
    app.Services.bindEvent =  function (element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
  };

  app.Services.sendMessage =  function (msg){
    // Make sure you are sending a string, and to stringify JSON
    window.parent.postMessage(msg, '*');
  };

  app.Services.getUrlById = function (id) {
    var result = App.Variables.preload.getResult(id, true);
    if (result != null) {
      var urlCreator = window.URL || window.webkitURL;
      if (result instanceof Blob) {
        result = urlCreator.createObjectURL(result);
      }

    }
    return result;
  };

  return app;

}(App || {}));
var App = (function(app) {
  /**
   * [enable log]
   * @type {Boolean}
   */
  app.Log.enable = false;
  app.jsonKH  = false;
  /**
   * 
   */
  app.Variables.figure = $(".player");

  /**
   * 
   */
  app.Variables.map.bg = $(".bg--map");
  return app;
}(App || {}));
var mainsound = null;
var messageFromIframe = "";
document.documentElement.addEventListener(
  "gesturestart",
  function (event) {
    event.preventDefault();
  },
  false
);
$.ajaxSetup({
  crossOrigin: true,
});
var ishover = [false, false, false];

function preloadResource() {
  App.Variables.preload = new createjs.LoadQueue();
  App.Variables.preload.installPlugin(createjs.Sound);
  var preloadVideo = new createjs.LoadQueue();
  App.Variables.preload.next = preloadVideo;
  App.Variables.preloadVideo = preloadVideo;

  //Sự kiện load hoàn thành.
  App.Variables.preloadVideo.on(
    "complete",
    function (event) {
      App.Variables.load.span.text("100%");
      App.Variables.load.process.css("width", "100%");
      initAll();
      $(".bg--play__btn").active(0);
      $(".bg--play__load").disable();

      App.Services.playSound(
        App.Variables.Data._data.data.game_background_music[0].id,
        function (sound) {
          mainsound = sound;
        }
      );
    },
    this
  );
  //Sự kiện xảy ra trong quá trình load.
  App.Variables.preload.on(
    "progress",
    function (event) {
      App.Variables.load.span.text(
        Math.floor(0.9 * event.progress * 100) + "%"
      );
      App.Variables.load.process.css(
        "width",
        Math.floor(0.9 * event.progress * 100) + "%"
      );
    },
    this
  );

  //Set background màn hình load. "url(" + App.Variables.Data._data.data.game_background[0].images + ") no-repeat bottom center"
  $("#wrapper").css(
    "background",
    "url(" +
      App.Variables.Data._data.data.game_background[3].images +
      ") no-repeat bottom center"
  );
  $(".bg--play__img").css(
    "background-image",
    "url(" + App.Variables.Data._data.data.game_background[0].images + ")"
  );
  //$('.letsplay').css('background-image', 'url(' + App.Variables.Data._data.data.game_load.images + ')');

  // Load các thứ cần thiết.
  // box
  var game_box = App.Variables.Data._data.data.game_box;
  App.Variables.preload.loadFile(
    { id: game_box.id, src: game_box.images },
    false
  );
  // questionbox
  var game_questionbox = App.Variables.Data._data.data.game_questionbox;
  App.Variables.preload.loadFile(
    { id: game_questionbox.id, src: game_questionbox.images },
    false
  );

  // game_character
  App.Variables.Data._data.data.game_character.forEach(function (item) {
    App.Variables.preload.loadFile({ id: item.id, src: item.images }, false);
  });

  // game_background
  App.Variables.Data._data.data.game_background.forEach(function (item) {
    App.Variables.preload.loadFile({ id: item.id, src: item.images }, false);
  });

  // // game_answers
  var game_answers = App.Variables.Data._data.data.game_answers;
  game_answers.forEach(function (item) {
    App.Variables.preload.loadFile({ id: item.id, src: item.images }, false);
    App.Variables.preload.loadFile(
      { id: "sound" + item.id, src: item.voice },
      false
    );
  });

  // game load
  var game_load = App.Variables.Data._data.data.game_load;
  App.Variables.preload.loadFile(
    { id: game_load.id, src: game_load.images },
    false
  );

  // game_path_file
  // App.Variables.Data._data.data.game_path_file.forEach(function (item) {
  //   App.Variables.preload.loadFile({ id: "img_path_file_" + item.id, src: item.images }, false);
  // });

  // game_points
  // App.Variables.preload.loadFile({ id: App.Variables.Data._data.data.game_points.id, src: App.Variables.Data._data.data.game_points.images }, false);

  // game_background_music
  App.Variables.Data._data.data.game_background_music.forEach(function (item) {
    App.Variables.preload.loadFile({ id: item.id, src: item.voice }, false);
  });

  //Gọi hàm load để bắt đầu load.
  App.Variables.preload.load();
}

/**
 *
 */
App.Services.getDataRes(
  function (data) {
    if (!App.Variables.isStartAll) {
      App.Variables.Data._data = data;
      preloadResource();
      App.Variables.isStartAll = true;
    }
  },
  function (err) {
    alert("Can't load data simple!");
  }
);

/**
 * click vào ô đúng
 */
function runClick() {
  var index = Number($(this).attr("index"));
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    ishover[index] = true;
  }

  if (ishover[index]) {
    //debugger;
    $(".run").unbind("click");
    $(".btn-fail").unbind("click");
    for (var j = 0; j < 3; j++) {
      ishover[j] = false;
    }

    App.Services.playSound(
      App.Variables.Data._data.data.game_background_music[2].id
    );

    // if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //   var text = $(this).children("p").attr("attr");
    //   App.Services.playSound("sound"+text);
    // }
    App.Variables.figure.getNumbByPx("left");
    $(this).addClass("bg--true");
    /**
     * đoạn nhảy của con cáo (start)
     */
    var n = $(this).children("p");
    n.active(0),
      App.Variables.figure.hasClass("started") &&
        App.Variables.figure.removeClass("started"),
      App.Variables.figure.hasClass("moving") ||
        App.Variables.figure.addClass("moving");
    for (var i = 1; i <= App.Variables.map.box; i++)
      if (i == App.Variables.map.count_box) {
        $(".moving").css(
          "animation-name",
          "moving" + App.Variables.map.count_box
        ),
          App.Variables.map.count_box++;
        break;
      }
    /////// (end)
    /**
     * lệnh di chuyển map ngược lại khi con cáo nhảy (start)
     */
    App.Variables.map.bg = $(".bg--map");
    App.Variables.map.bg.hasClass("wrapper--run") ||
      App.Variables.map.bg.addClass("wrapper--run");
    var s = App.Variables.map.bg.getNumbByPx("width");
    if (App.Variables.map.count_box < 10) {
      l =
        (s / App.Variables.map.box) * -App.Variables.map.count_box +
        App.Variables.map.count_box *
          (App.Variables.screen / App.Variables.map.box);
      $(".wrapper--run").css("transform", "translate(" + l + "px,0)");
    }
    //////////// (end)

    App.Variables.N--;
    if (App.Variables.map.count_box <= 10) {
      if (App.Variables.N == 0) {
        setTimeout(function () {
          App.Services.UpdateAnswer(
            App.Variables.Data._listR,
            App.Variables.Data._listW
          );
        }, 1000);
      }
    }
    /**
     * sau khi con cáo nhảy xong
     */
    App.Variables.figure.one(
      "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
      function (i) {
        /**
         * check hết 10 câu hỏi
         */
        if (App.Variables.map.count_box > 10) {
          /**
           * up point
           */
          var dataObj = App.Services.GetObjectFromUrl();
          dataObj.point = (App.Variables.map.count_box - 1) * 10;
          App.Services.sendMessage(
            "exerciseid=" + dataObj.exerciseid + "&point=" + dataObj.point
          ); // exerciseid=2&point=99
          App.Http.postHeaders(
            App.Constants.upPoint,
            dataObj,
            function (data) {
              App.Log.w(data, "upPoint:SUCCESS");
            },
            function (err) {
              App.Log.w(err, "upPoint:ERR");
            }
          );

          $(".img-win p").children("span").text(dataObj.point);

          App.Variables.figure.removeClass("moving");

          App.Variables.figure.addClass("win");
          $(".bg--question").disable();
          $(".bg--excellent").active(1);

          App.Services.playSound(
            App.Variables.Data._data.data.game_background_music[4].id
          );

          App.Services.getDataRes(
            function (data) {
              App.Variables.Data._data = data;
              App.Services.UpdateQuestion(App.Variables.Data._data);
            },
            function (err) {
              alert("Can't load data simple!");
            }
          );
          App.Log.w(App.Variables.map.count_box - 1, "điểm chơi");
          App.Variables.map.count_box = 1;
        }
        n.disable();
      }
    );
  } else {
    if (mainsound != null) {
      mainsound.stop();
    }
    ishover[index] = true;

    var text = $(this).children("p").attr("attr");
    if (App.Variables.bg_sound != null) {
      App.Variables.bg_sound.stop();
      App.Variables.bg_sound = null;
    }

    App.Services.playSound("sound" + text, function (sound) {
      App.Variables.bg_sound = sound;
      sound.on("complete", handleComplete, this);
    });
  }
}

/**
 * click vào ô sai
 */
function btnFailClick() {
  if (mainsound != null) {
    mainsound.stop();
  }
  var index = Number($(this).attr("index"));
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    ishover[index] = true;
  }
  if (ishover[index]) {
    $(".run").unbind("click");
    $(".btn-fail").unbind("click");

    for (let j = 0; j < 3; j++) {
      ishover[j] = false;
    }
    /**
     * up point
     */
    var dataObj = App.Services.GetObjectFromUrl();
    dataObj.point = (App.Variables.map.count_box - 1) * 10;
    App.Services.sendMessage(
      "exerciseid=" + dataObj.exerciseid + "&point=" + dataObj.point
    ); // exerciseid=2&point=99
    App.Http.postHeaders(
      App.Constants.upPoint,
      dataObj,
      function (data) {
        App.Log.w(data, "upPoint:SUCCESS");
      },
      function (err) {
        App.Log.w(err, "upPoint:ERR");
      }
    );

    $(".img-fail p").children("span").text(dataObj.point);
    /**
     * lệnh play âm thanh
     */
    App.Services.playSound(
      App.Variables.Data._data.data.game_background_music[3].id
    );

    // if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //   var text = $(this).children("p").attr("attr");
    //   App.Services.playSound("sound"+text);
    //   App.Log.w(text);
    // }

    n = App.Variables.figure.getNumbByPx("left");
    i = $(this).children("p");
    e = $(this);
    e.addClass("bg--false");
    i.active(),
      App.Variables.figure.hasClass("fail") ||
        (App.Variables.figure.removeClass("started"),
        App.Variables.figure.removeClass("moving"),
        App.Variables.figure.addClass("fail"),
        $(".fail.player").css("left", n + "px")),
      App.Variables.figure.one(
        "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
        function (a) {
          $(".bg--question").disable(),
            $(".bg--fail").active(0),
            e.removeClass("bg--false"),
            i.disable(),
            $(this).unbind(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd"
            );
        }
      );
    setTimeout(function () {
      App.Services.UpdateAnswer(
        App.Variables.Data._listR,
        App.Variables.Data._listW
      );
    }, 1000);
  } else {
    if (mainsound != null) {
      mainsound.stop();
    }
    ishover[index] = true;

    var text = $(this).children("p").attr("attr");
    if (App.Variables.bg_sound != null) {
      App.Variables.bg_sound.stop();
      App.Variables.bg_sound = null;
    }

    App.Services.playSound("sound" + text, function (sound) {
      App.Variables.bg_sound = sound;
      sound.on("complete", handleComplete, this);
    });
  }
}
/* end doNV*/

function mobileClick() {}

/**
 * khởi tạo toàn bộ
 */
function initAll() {
  App.Services.UpdateLearn();
  //App.Services.UpdateQuestion(App.Variables.Data._data);

  /**
   * nhấn vào nút letsplay
   */
  var play = $(".btn-play");
  if (play.length > 0) {
    play.click(function () {
      if (mainsound != null) {
        mainsound.stop();
      }
      clearInterval(App.Variables.setInterval.event_listen);
      App.Services.playSound(
        App.Variables.Data._data.data.game_background_music[1].id
      );

      App.Services.getDataRes(
        function (data) {
          App.Variables.Data._data = data;
          App.Variables.rnd = App.Services.getNumberRandomBetween(
            data.data.game_answers.length - 1,
            0
          );
          App.Services.UpdateQuestion(App.Variables.Data._data);
        },
        function (err) {
          alert("Can't load data simple!");
        }
      );

      App.Variables.figure.removeClass("win");

      App.Variables.figure.removeClass("moving");

      App.Variables.figure.removeClass("fail");

      $(".bg--play").disable();
      $(".bg--fail").disable();
      $(".bg--excellent").disable();
      $(".bg--learn").disable();

      $(".bg--map").active(0);

      if (!App.Variables.figure.hasClass("started")) {
        App.Variables.figure.addClass("started");
        App.Variables.map.count_box = 1;
        App.Variables.figure.css("left", "-150px");
      }

      $(".bg--question").active(1);
      $(".bg--map").css("transform", "translate(0,0)");
    });

    setCss();
  }

  //let's learn
  $(".btn-learn").click(function () {
    if (mainsound != null) {
      mainsound.stop();
    }
    App.Services.playSound(
      App.Variables.Data._data.data.game_background_music[1].id
    );
    $(".bg--learn").active(1);
    $(".bg--fail").disable();
    $(".bg--play").disable();
    $(".bg--excellent").disable();
  });

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // code doubleclick for mobie here
    // hover audio
    //App.Variables.question.click(mobileClick);
  } else {
    // hover audio
    App.Variables.question.mouseenter(function () {
      var text = $(this).children("p").attr("attr");
      if (App.Variables.bg_sound != null) {
        App.Variables.bg_sound.stop();
      }

      App.Services.playSound("sound" + text, function (sound) {
        App.Variables.bg_sound = sound;
        sound.on("complete", handleComplete, this);
      });
    });
  }

  /**
   * hover vao item learn
   */
  App.Variables.learn_item = $(".bg--learn__item");
  App.Variables.learn_item.mouseenter(function () {
    clearInterval(App.Variables.setInterval.event_listen);
    var text = $(this).children("p").attr("attr");

    if (App.Variables.bg_sound != null) {
      App.Variables.bg_sound.stop();
    }

    App.Services.playSound("sound" + text, function (sound) {
      App.Variables.bg_sound = sound;
      sound.on("complete", handleComplete, this);
    });
  });
  /**
   * nút play toàn bộ âm thanh
   */
  var btn_sound = $(".btn-sound");
  btn_sound.click(function () {
    var d = 0;
    var delay;
    $(".bg--learn__list-item").scrollTop(0);

    var text = App.Variables.learn_item[0].children[1].getAttribute("attr");
    App.Services.playSound("sound" + text, function (sound) {
      App.Variables.setInterval.time = sound.getDuration() || 1;
      App.Log.w(App.Variables.setInterval.time);
    });

    App.Variables.learn_item.removeClass("bg--learn__hover");
    $(".bg--learn__item:eq(" + d + ")").addClass("bg--learn__hover");
    var height = $(".bg--learn__list-item .col-25").getNumbByPx("height");
    var top_lst = 0;

    if (App.Variables.setInterval.event_listen != null) {
      clearInterval(App.Variables.setInterval.event_listen);
    }

    App.Variables.setInterval.event_listen = setInterval(function () {
      if (d < App.Variables.learn_item.length - 1) {
        d++;

        if (d % 4 == 0) {
          top_lst += height;
          $(".bg--learn__list-item").scrollTop(top_lst);
        }
        //debugger;
        var text = App.Variables.learn_item[d].children[1].getAttribute("attr");
        App.Services.playSound("sound" + text, function (sound) {
          App.Variables.setInterval.time = sound.getDuration() || 1;
        });

        //hover item
        App.Variables.learn_item.removeClass("bg--learn__hover");
        $(".bg--learn__item:eq(" + d + ")").addClass("bg--learn__hover");
        //}
      } else {
        $(".bg--learn__item").removeClass("bg--learn__hover");
        top_lst = 0;
        //top = 0;
      }
    }, App.Variables.setInterval.time + 1000);
  });
  ////////////////////////////////////////////////////////////////
  /**
   * nut play toàn bộ âm thanh 2
   */
  var btn_repeat = $(".btn-sound-repeat");
  btn_repeat.click(function () {
    clearInterval(App.Variables.setInterval.event_listen);

    var height = $(".bg--learn__list-item .col-25").getNumbByPx("height");

    if (App.Variables.sound.count_sound < App.Variables.learn_item.length) {
      if (App.Variables.sound.count_sound % 4 == 0) {
        $(".bg--learn__list-item").scrollTop(
          (App.Variables.sound.count_sound / 4) * height
        );
      }
      var text =
        App.Variables.learn_item[
          App.Variables.sound.count_sound
        ].children[1].getAttribute("attr");
      App.Services.playSound("sound" + text);
      App.Log.w(text);

      App.Variables.learn_item.removeClass("bg--learn__hover");
      $(
        ".bg--learn__item:eq(" + App.Variables.sound.count_sound + ")"
      ).addClass("bg--learn__hover");
      App.Variables.sound.count_sound++;
    } else {
      App.Variables.sound.count_sound = 0;
      //top_lst = 0;
      $(".bg--learn__list-item").scrollTop(0);
    }
  });

  /**
   * click vào btn close
   */
  $(".btn-close").click(function () {
    App.Services.playSound(
      App.Variables.Data._data.data.game_background_music[1].id
    );
    App.Services.playSound(
      App.Variables.Data._data.data.game_background_music[0].id,
      function (sound) {
        mainsound = sound;
      }
    );

    $(".bg--play").active(1);
    $(".bg--learn").disable();
    $(".bg--fail").disable();
    $(".bg--excellent").disable();

    clearInterval(App.Variables.setInterval.event_listen);
  });

  /**
   * chạy thanh progress
  //  */
  // App.Variables.load.process.one("animationend webkitAnimationEnd oAnimationEnd", function () {
  //   App.Log.w("animationend :end load");
  // })
  //
  App.Variables.load.process.css("animation-name", "load");
  App.Variables.load.process.one(
    "animationstart mozAnimationStart webkitAnimationStart oAnimationStart MSAnimationStart",
    function () {
      App.Log.w("animationstart :start load");
      clearInterval(App.Variables.setInterval.load_percent);
      var i = 0;

      App.Variables.setInterval.load_percent = setInterval(function () {
        if (i > 100) {
          clearInterval(App.Variables.setInterval.load_percent);
        }
        App.Variables.load.span.text("loading... " + i++ + "%");
      }, 98);
    }
  );
  ////
}
/**
 * func set imgaes for css (đang test)
 */
function setCss() {
  //$(".bg--play__img").css("background", "url(" + App.Variables.Data._data.data.game_background[0].images + ") no-repeat bottom center");
  $(".bg--map").css(
    "background",
    "url(" +
      App.Services.getUrlById(
        App.Variables.Data._data.data.game_background[3].images
      ) +
      ") no-repeat"
  );
  $(".list-box li").css(
    "background",
    "url(" +
      App.Services.getUrlById(App.Variables.Data._data.data.game_box.images) +
      ") no-repeat top center"
  );
  $(".bg--question__item").css(
    "background",
    "url(" +
      App.Services.getUrlById(
        App.Variables.Data._data.data.game_questionbox.images
      ) +
      ") no-repeat center center"
  );
  $(".btn-play img").attr(
    "src",
    App.Services.getUrlById(
      App.Variables.Data._data.data.game_background[1].images
    )
  );
  $(".btn-learn img").attr(
    "src",
    App.Services.getUrlById(
      App.Variables.Data._data.data.game_background[2].images
    )
  );
  $(".bg--fail__box").css(
    "background",
    "url(" +
      App.Services.getUrlById(
        App.Variables.Data._data.data.game_background[4].images
      ) +
      ") no-repeat top center"
  );
  $(".bg--excellent__box").css(
    "background",
    "url(" +
      App.Services.getUrlById(
        App.Variables.Data._data.data.game_background[5].images
      ) +
      ") no-repeat top center"
  );
  $(".bg--learn__box").css(
    "background",
    "url(" +
      App.Variables.Data._data.data.game_background[6].images +
      ") no-repeat top center"
  );

  var character = App.Variables.Data._data.data.game_character;
  var root =
    ":root{" +
    "--fail1 : url('" +
    character[0].images +
    "') no-repeat;" +
    "--fail2 : url('" +
    character[1].images +
    "') no-repeat;" +
    "--fail3 : url('" +
    character[2].images +
    "') no-repeat;" +
    "--fail4 : url('" +
    character[3].images +
    "') no-repeat;" +
    "--jump5 : url('" +
    character[4].images +
    "') no-repeat top center;" +
    "--jump6 : url('" +
    character[5].images +
    "') no-repeat top center;" +
    "--jump7 : url('" +
    character[6].images +
    "') no-repeat top center;" +
    "--jump8 : url('" +
    character[7].images +
    "') no-repeat top center;" +
    "--win9 : url('" +
    character[8].images +
    "');" +
    "}";

  $("#var").html(root);
}

function handleComplete() {
  App.Variables.bg_sound = null;
}

App.Services.bindEvent(window, "message", function (e) {
  messageFromIframe = e.data;
});

/**
 * cố định
 */
$(window).bind("resize load", function () {
  var size = 996 / 561;

  if ($(window).width() <= 1366) {
    if ($(window).width() / $(window).height() > size) {
      $("#wrapper").scale($(window).height() / 561);
      $("#wrapper").css(
        "left",
        ($(window).width() -
          ($("#wrapper").width() * $(window).height()) / 561) /
          2
      );
    } else $("#wrapper").scale($(window).width() / App.Variables.screen);
  }
});

var a = {
  id: " 1",
  name: "thach",
  name2: [],
  name3: {},
  name4: 1,
};
