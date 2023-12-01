export interface BarCodeReadEvent {
  data: string;
  rawData?: string;
  type: keyof BarCodeType;
  /**
   * @description For Android use `{ width: number, height: number, origin: Array<Point<string>> }`
   * @description For iOS use `{ origin: Point<string>, size: Size<string> }`
   */
  bounds:
    | {width: number; height: number; origin: Array<Point<string>>}
    | {origin: Point<string>; size: Size<string>};
  /**
   * Raw image bytes in JPEG format (quality 100) as Base64-encoded string, only provided if `detectedImageInEvent=true`.
   */
  image: string;
}
