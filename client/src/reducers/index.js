import { ADD_ARTICLE, CHANGE_ITEM } from "../constants/action-types";
const initialState = {
  brand: 'Apple',
  name: 'Awesome Brand New Apple Iphone X, , GSM Unlocked 5.8", 256 GB - Space Gray',
  star1: 2,
  star2: 10,
  star3: 33,
  star4: 104,
  star5: 483,
  reviews: 632,
  questions: 1893,
  price: 999.99,
  color: 'Space Grey',
  size: '64GB 256GB',
  weight: '0.38',
  text: 'Super Retina HD display. \
  5.8-inch (diagonal) all-screen OLED Multi-Touch display. \
  HDR display. \
  2436-by-1125-pixel resolution at 458 ppi. \
  1,000,000:1 contrast ratio (typical). \
  True Tone display. \
  Wide color display (P3). \
  3D Touch. \
  625 cd/m2 max brightness (typical). \
  Fingerprint-resistant oleophobic coating. \
  Support for display of multiple languages and characters simultaneously',
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ITEM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default rootReducer;