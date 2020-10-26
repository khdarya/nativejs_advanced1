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

// export type ChangeCurrencyFieldType = {
//   type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
//   payload: {
//     amountOfBYN: string,
//     amountOfCurrency: string
//   }
// };

// export const changeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
// return {
//   type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
//   payload: {
//     amountOfBYN,
//     amountOfCurrency,
//   }
// }
// };

export type ChangeCurrencyFieldPayload = {
  amountOfBYN: string,
  amountOfCurrency: string
}

export const changeCurrencyFieldAC = makeAction<ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, ChangeCurrencyFieldPayload>(ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE);

// export type ChangeActionType = {
//   type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
//   payload: {isBuying: boolean}
// };

export type ChangeActionPayload = {
  isBuying: boolean
}

// export const changeActionAC = (isBuying: boolean): ChangeActionType => {
// return {
//   type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
//   payload: {
//     isBuying,
//   },
// };
// };

export const changeActionAC = makeAction<ACTIONS_TYPE.CHANGE_CHANGE_ACTION, ChangeActionPayload>(ACTIONS_TYPE.CHANGE_CHANGE_ACTION)

// export type ChangeCurrentCurrencyType = {
//   type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
//   payload: {
//     currentCurrency: string
//   }
// };

export type ChangeCurrentCurrencyPayload = {
  currentCurrency: string
}

// export const changeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
//   return {
//     type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
//     payload: {
//       currentCurrency,
//     }
//   }
// };
export const changeCurrentCurrencyAC = makeAction<ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY, ChangeCurrentCurrencyPayload>(ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY);

interface IStringMap<T> {
  [key: string]: T;
}

type IAnyFunction = (...args: any[]) => any;

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

const actions = {
  changeCurrencyFieldAC,
  changeActionAC,
  changeCurrentCurrencyAC
}

//export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeActionType | ChangeCurrentCurrencyType;
export type CurrencyReducersTypes = IActionUnion<typeof actions>;