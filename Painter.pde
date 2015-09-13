class Painter{
	PImage image;

	public Painter(PImage image){
		image = image;
	}

	public static void paint(){
		image(image, 0, 0);
	}
}