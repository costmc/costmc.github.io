var twi = document.getElementsByTagName('i');
for (var i = 0; i < twi.length; i++) {
  twemoji.parse(twi[i], {"folder":"assets/img/svg","ext":".svg","base":""});
}
// twemoji.parse(twi, {"size":72});
