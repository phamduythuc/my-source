export class utilsCommonService {
  public static formatMoney(value: number, lang: string) {
    let money: any;
    let exchangeRateConvert = value * 24000;
    const USD = new Intl.NumberFormat('en-US', {
      style:'currency',
      currency: 'USD'
    });
    const VND = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    })
    if(lang === 'en') {
      if (!!value) {
        money = USD.format(value)
      }
    }
    if(lang === 'vi') {
      if (!!value) {
        money = VND.format(exchangeRateConvert)
     }
    }
    return money
  }
}
