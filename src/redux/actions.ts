import { useDispatch as _useDispatch} from 'react-redux';

export function useDispatch() {
const dispatch = _useDispatch();
return (ac: CurrencyReducersTypes) => dispatch(ac);
}


export enum ACTIONS_TYPE {
  CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
  CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
  CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

const makeAction = <T extends ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload});

export type ChangeCurrencyFieldType = {
  type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
  payload: {
    amountOfBYN: string,
    amountOfCurrency: string
  }
};

export const changeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
return {
  type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
  payload: {
    amountOfBYN,
    amountOfCurrency,
  }
}
};

export type ChangeActionType = {
  type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
  payload: {isBuying: boolean}
};

export const changeActionAC = (isBuying: boolean): ChangeActionType => {
return {
  type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
  payload: {
    isBuying,
  },
};
};

export type ChangeCurrentCurrencyType = {
  type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
  payload: {
    currentCurrency: string
  }
};
export const changeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
  return {
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
    payload: {
      currentCurrency,
    }
  }

};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeActionType | ChangeCurrentCurrencyType;
