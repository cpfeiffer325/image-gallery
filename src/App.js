import React, { Component } from 'react';
import './App.css';

const imageUrls = [
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/7/7/1/WU0603_Tomato-Basil_s3x4.jpg.rend.hgtvcom.406.305.suffix/1404830649994.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/14/1/EA1313H_Buff-smoothie_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382542433246.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/3/29/1/FNK_Picnic-Brick-Pressed-Sandwiches-Opener_s4x3.jpg.rend.hgtvcom.826.551.suffix/1459274976994.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/14/0/FNK_CAMPFIRE_LASAGNA_H_slice.jpg.rend.hgtvcom.616.347.suffix/1557967314936.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/3/23/0/0044833F4_banana-sour-cream-pancakes_s4x3.jpg.rend.hgtvcom.616.347.suffix/1487192608195.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/7/25/0/FN_getty_steak-and-red-wine_s4x3.jpg.rend.hgtvcom.616.347.suffix/1469513254718.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/7/02/GettyImages-620926059.jpg.rend.hgtvcom.616.347.suffix/1562170861525.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/7/30/0/GJ0206H_Kale-Salsa-Verde-Bruschetta_s4x3.jpg.rend.hgtvcom.826.551.suffix/1472191499394.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/16/0/WU0513H_Chile-Con-Queso_s4x3.jpg.rend.hgtvcom.406.305.suffix/1433674889093.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/4/23/0/FNM_050114-USTacos-Kentucky_s4x3.jpg.rend.hgtvcom.406.305.suffix/1397683300489.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/11/27/0/FN_new-orleans-restaurant-guide-bevi-opener_s4x3.jpg.rend.hgtvcom.406.305.suffix/1511836276864.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/6/4/0/EI1201_Italian-Flat-Bread-with-Fontina-and-Prosciutto.jpg.rend.hgtvcom.826.551.suffix/1371587723532.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/8/20/0/CCCLC208_Fat-Doug-burger-recipe_s4x3.jpg.rend.hgtvcom.406.305.suffix/1396272236688.jpeg",
  "https://food.fnr.sndimg.com/content/dam/crosspromo/footers/Bfv4WDaaSi2t9qDKBnEP_0S9A5561.jpg.rend.hgtvcom.406.305.suffix/1561995014859.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/7/22/3/FNM090116_Grilled-Steak-and-Greek-Corn-Salad_s4x3.jpg.rend.hgtvcom.476.357.suffix/1469255050835.jpeg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/8/22/0/WU0304H_gazpacho_s4x3.jpg.rend.hgtvcom.336.252.suffix/1394587355905.jpeg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Food Image Gallery using React</h1>
        </div>
        <main className="image-container">
          {imageUrls.map((image) =>
            <img className="image" src={image} alt="foodimage"/>
          )}
        </main>
      </div>
    );
  }
}

export default App;
