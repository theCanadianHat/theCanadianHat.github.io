/*
	This is a test file to make sure that we can use processing.js to make a
	working mult-file application. So the test here is get this "main" to load
	an image thorough one class and paint it to the canvas from another.

*/

String filepath = "mario_hammer.jpg";
String fileType = "jpg";
Loader loader;
Painter painter;

void setup(){
	//get the image loaded 
 	size(700,500);
  	loader = new Loader(filepath,fileType);
  	painter = new Painter(loader.getImage());
}

void draw(){
	//get the image painted
	painter.paint();
}

