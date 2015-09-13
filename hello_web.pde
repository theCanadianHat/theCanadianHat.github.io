/*
	This is a test file to make sure that we can use processing.js to make a
	working mult-file application. So the test here is get this "main" to load
	an image thorough one class and paint it to the canvas from another.

*/

String filepath = "mario_hammer.jpg";
String fileType = "jpg";
Loader l;
Painter p;

void setup(){
	//get the image loaded 
 	size(700,500);
  	l = new Loader(filepath,fileType);
  	p = new Painter(l.getImage());
}

void draw(){
	//get the image painted
	p.paint();
}

