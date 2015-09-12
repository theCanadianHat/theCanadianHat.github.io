/*
	So create an instance of Loader with the file path for the Image
	it will load and keep a refernce to. Which you can call on with its 
	public getter
*/

class Loader{
	PImage image;

	public Loader(String filePath, String fileType){
		image = loadImage(filePath, fileType);
	}

	public PImage getImage(){
		return image;
	}
}