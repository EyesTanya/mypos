import { SHOP_UPDATE_ORDER, SHOP_UPDATE_PAYMENT } from "../constants";

const initialState = {
  mTaxAmt: 0,
  mIsPaymentMade: false,
  mTotalPrice: 0,
  mOrderLines: [],
  mGiven: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOP_UPDATE_ORDER:
      return { ...state, ...payload };
    case SHOP_UPDATE_PAYMENT:
      return { ...state, ...payload };

    default:
      return state;
  }
};
