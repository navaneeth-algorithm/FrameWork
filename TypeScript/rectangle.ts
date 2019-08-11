//Here export keyword will expose the class to the outerWorld

export class Rectangle{
    //private height:number;
    //private width:number;

    distance:number;
   // draw: ()=> void; Declaring function with type void

    constructor(private _height?:number,private _width?:number)
    {
      //  this.height = height;
      //It will initialse and generate feild by giving parameter with private access modifier
      //  this.width = width;
    }
   draw()
   {
       console.log('Rectagle Drawn with height '+this._height+" and "+
       "with width "+this._width);
   }
   setParameter(height?:number,width?:number)
   {
       this._height = height;
       this._width = width;
   }

   getDistance(rectObj:Rectangle)
   {
        return Math.sqrt(Math.pow(rectObj._height,2)+Math.pow(rectObj._width,2));
   }

   getHeight()
   {
       return this._height;
   }

   getWidth()
   {
       return this._width;
   }

   setHeight(height:number)
   {
       if(height<0)
            throw new Error("Cannot be less than 0");
       this._height = height;
   }
   setWidth(width:number)
   {
        this._width = width;
   }

   //Has set & get keyword which can be used to set and get the property
   set height(height:number)
   {
        if(height<0)
            throw new Error("Cannot be -ve");
   }
   get height()
   {
        return this._height;
   }

};
