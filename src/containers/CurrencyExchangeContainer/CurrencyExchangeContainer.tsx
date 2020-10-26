import React from 'react';
import { connect, useSelector } from 'react-redux';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { IGlobalState } from '../../redux/state';
import { CurrencyState } from '../../redux/currencyReducer';
import { compose, Dispatch } from 'redux';
import {
  changeActionAC,
  changeCurrencyFieldAC,
  changeCurrentCurrencyAC,
  useDispatch,
  CurrencyReducersTypes,
} from '../../redux/actions';
import { selectCurrency } from '../../redux/selectors';

// interface ICurrencyProps extends CurrencyState {
//   setCurrencyAmount: (amountOfBYN: string, amountOfCurrency: string) => void;
//   setAction: (isBuying: boolean) => void;
//   changeCurrency: (currency: string) => void;
// }

// interface ICurrencyProps extends CurrencyState {
//   changeActionAC: Function;
//   changeCurrencyFieldAC: Function;
//   changeCurrentCurrencyAC: Function;
//}

//const CurrencyEContainer: React.FunctionComponent<ICurrencyProps> = ({

//const CurrencyEContainer: React.FunctionComponent<CurrencyState> = ({
const CurrencyEContainer: React.FunctionComponent = (
  // currencies,
  // currentCurrency,
  // isBuying,
  // amountOfBYN,
  // amountOfCurrency,

                                                                    //  changeActionAC,
                                                                    //  changeCurrencyFieldAC,
                                                                    //  changeCurrentCurrencyAC,
  //setCurrencyAmount,
  //setAction,
  //changeCurrency,

) => {

  const dispatch = useDispatch();
  const { currencies,
    currentCurrency,
    isBuying,
    amountOfBYN,
    amountOfCurrency } = useSelector(selectCurrency);

  let currencyRate: number = 0;
  const currenciesName = currencies.map((currency) => {
    if (currency.currencyName === currentCurrency) {
      currencyRate = isBuying ? currency.buyRate : currency.sellRate;
    }
    return currency.currencyName;
  });

  const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!isFinite(+value)) return;
    if (e.currentTarget.dataset.currency) {
      const trigger: string = e.currentTarget.dataset.currency;
      if (trigger === 'byn') {
        if (value === '') {
          //setCurrencyAmount(value, value);
          //changeCurrencyFieldAC(value, value);
          //dispatch(changeCurrencyFieldAC(value, value));
          dispatch(changeCurrencyFieldAC({ amountOfBYN: value, amountOfCurrency: value }));
        } else {
          //setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
          //dispatch(changeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
          dispatch(changeCurrencyFieldAC({amountOfBYN: value, amountOfCurrency: (+Number(value).toFixed(2) / currencyRate).toFixed(2)}));
        }
      } else {
        if (value === '') {
          //setCurrencyAmount(value, value);
          //dispatch(changeCurrencyFieldAC(value, value));
          dispatch(changeCurrencyFieldAC({ amountOfBYN: value, amountOfCurrency: value }));
        } else {
          //setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
          //dispatch(changeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
          dispatch(changeCurrencyFieldAC({amountOfBYN:(+Number(value).toFixed(2) * currencyRate).toFixed(2), amountOfCurrency: value}));
        }
      }
    }
  };
  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
    //e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
    //e.currentTarget.dataset.action === 'buy' ? changeActionAC(true) : changeActionAC(false);
    //dispatch(changeActionAC(e.currentTarget.dataset.action === 'buy' ));
    dispatch(changeActionAC({isBuying: e.currentTarget.dataset.action === 'buy' }));
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    //e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
    //e.currentTarget.dataset.currency && dispatch(changeCurrentCurrencyAC(e.currentTarget.dataset.currency));
    e.currentTarget.dataset.currency && dispatch(changeCurrentCurrencyAC({currentCurrency: e.currentTarget.dataset.currency}));
  };

  return (
    <React.Fragment>
      <CurrencyExchange
        currenciesName={currenciesName}
        currentCurrency={currentCurrency}
        currencyRate={currencyRate}
        isBuying={isBuying}
        amountOfBYN={amountOfBYN}
        amountOfCurrency={amountOfCurrency}
        changeCurrencyField={changeCurrencyField}
        changeAction={changeAction}
        changeCurrentCurrency={changeCurrentCurrency}
      />
    </React.Fragment>
  );
};

// const mapStateToProps = (state: IGlobalState) => {
//   return {
//     currencies: state.currency.currencies,
//     currentCurrency: state.currency.currentCurrency,
//     isBuying: state.currency.isBuying,
//     amountOfBYN: state.currency.amountOfBYN,
//     amountOfCurrency: state.currency.amountOfCurrency,
//   };
// };

// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>) => {
//   return {
//     setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
//       dispatch(changeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
//     },
//     setAction(isBuying: boolean) {
//       dispatch(changeActionAC(isBuying));
//     },
//     changeCurrency(currency: string) {
//       dispatch(changeCurrentCurrencyAC(currency));
//     },
//   };
// };

//export const CurrencyExchangeContainer = compose(connect(mapStateToProps, mapDispatchToProps))(CurrencyEContainer);
// export const CurrencyExchangeContainer = compose(connect(mapStateToProps,
// // export const CurrencyExchangeContainer = compose(connect(mapStateToProps, {
// //   changeActionAC,
// //   changeCurrencyFieldAC,
// //   changeCurrentCurrencyAC,
// // }
// ))(CurrencyEContainer);

export default CurrencyEContainer;
