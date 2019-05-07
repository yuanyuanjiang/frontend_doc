### 将设计稿的px转为dp

```
import {Dimensions, PixelRatio} from 'react-native';

/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */
const screenW = Dimensions.get('window').width; //设置的宽度
const screenH = Dimensions.get('window').height; //设备的高度
const fontScale = PixelRatio.getFontScale(); //字体大小缩放比例
const pixelRatio = PixelRatio.get(); //当前设备是像素密度
const defaultPixel = 2; //iphone6的像素密度
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
const scale = Math.min(screenW / w2, screenH / h2);
/**
 * 设置text为px
 * @param size  px 设计尺寸
 * @returns {Number} dp
 */
function setSpText(size : Number) {
  size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
  return size / pixelRatio / defaultPixel;
}
/**
 * 屏幕适配,缩放size
 * @param size
 * @returns {Number}
 * @constructor
 */
function scaleSize(size : Number) {
  size = Math.round((size * scale + 0.5));
  return size / defaultPixel;
}

/**
 * 设置百分比宽度
 * @type {[type]}
 */
function percentW(size : Number) {
  let pw = Math.round(screenW * (size / 100));
  return pw;
}

/**
 * 设置百分比高度
 * @type {[type]}
 */
function percentH(size : Number) {
  let ph = Math.round(screenH * (size / 100));
  return ph;
}

export default {
  screenW: screenW,
  screenH: screenH,
  percentW: percentW,
  percentH: percentH,
  setSpText: setSpText,
  scaleSize: scaleSize
}

```
eg: 设计稿上盒子宽度为200px，marginTop为20px，字体为32px<br>
width: scaleSize(200),<br>
marginTop: scaleSize(20),<br>
fontSize: setSpText(32)<br>
### 全局字体设置


#### [参考](http://blog.csdn.net/u011272795/article/details/73824558)
