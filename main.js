var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:4001/speak",
  "method": "POST",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic ZnJlMTk5NEBnbWFpbC5jb206VGVzdGVyQDQwNA==",
    "Cache-Control": "no-cache"
  },
  "data": {
    "text": "I am finally working"
  }
}
$.ajax(settings).done(function(data) {
  // console.log(data.DataAsByteArrayString);
  let byteString = JSON.stringify(data.DataAsByteArrayString)
  console.log(byteString);
  var settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "http://192.168.1.129/Api/SaveAudioAssetToRobot",
    "method": "POST",
    "headers": {
      "content-type": "text/plain"
    },
    "data":
    JSON.stringify({
      "FilenameWithoutPath": "textResponse.wav",
      "DataAsByteArrayString": `${data.DataAsByteArrayString}`,
      "ImmediatelyApply": "false",
      "OverwriteExisting": "true"
    })
  }
  console.log(data);
  $.ajax(settings2).done(function (response2) {
    
    console.log(response2);
  });
})
