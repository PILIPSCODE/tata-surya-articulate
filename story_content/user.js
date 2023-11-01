function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6WuxoGOqOL4":
        Script1();
        break;
      case "6kRv2l2Xl1x":
        Script2();
        break;
      case "6gzljbyuUGW":
        Script3();
        break;
  }
}

function Script1()
{
     const audio = document.querySelector('.audio-kobo')
    audio.src = "kobo.mp3"
    audio.load();
    audio.play();
    audio.volume= "0.5"
}

function Script2()
{
     const audio = document.querySelector('.audio-kobo')
  
    audio.pause();

}

function Script3()
{
     const audio = document.querySelector('.audio-kobo')
    audio.src = "/kobo.mp3"
    audio.play()
}

