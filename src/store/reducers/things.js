import { ADD_ITEM, DELETE_ITEM } from '../actions/actionTypes'

const initialState = {
  things: [
    {
      title: 'Barbour',
      key: Math.random(),
      description: 'Nice Barbour Bedale Jacket in very good condition with a removable fluffy warm Barbour liner.  ' +
      'Measured flat across the front chest from armpit to armpit it is 21 inches across and from shoulder to hem it ' +
      'is 28 inches long the sleeves are 24 inches long it has two outside pockets, one inside pocket, original Barbour ' +
      'badges and the traditional Barbour tartan lining.',
      price: '$87',
      image: 'https://the-cafe-racer.com/media/catalog/product/cache/1/thumbnail/1000x/9df78eab33525d08d6e5fb8d27136e95/b/a/barbour-original-black4.jpg'
    },
    {
      title: 'Belstaff',
      key: Math.random(),
      description: 'The iconic four-pocket Roadmaster has been remodelled this season with an improved fit for mobility.' +
      ' Cut to fit close to the body with a belt to cinch at the waist, it features four storm-proof pockets to the front.' +
      ' Crafted in black cambric cotton sourced from a historical British mill, its shiny waxed finish has been developed ' +
      'since the 1800s for optimum breathability and water-resistance.',
      price: '$92',
      image: 'http://www.boilerrepairsbrighton.com/images/product/Belstaff37594.jpg'
    }
  ]
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        things: state.things.concat({
          key: Math.random(),
          detailInfo: action.detailInfo
        })
      };
    case DELETE_ITEM:
      return {
        ...state,
        things: state.things.filter(thing => {
          return thing.key !== action.itemKey
        }),
        selectedItem: null
      };
    default:
      return state;
  }
};

export default reducer;