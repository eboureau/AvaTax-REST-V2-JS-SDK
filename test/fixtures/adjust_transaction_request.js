/**
 * Avalara © 2017
 * file: test/fixtures/adjust_transaction_request.js
 */
export default {
  adjustmentReason: 'PriceAdjusted',
  adjustmentDescription: 'Price dropped before shipping',
  newTransaction: {
    type: 'SalesInvoice',
    companyCode: 'DEFAULT',
    date: '2017-04-13',
    customerCode: 'ABC',
    purchaseOrderNo: '2017-04-13-001',
    addresses: {
      SingleLocation: {
        line1: '123 Main Street',
        city: 'Irvine',
        region: 'CA',
        country: 'US',
        postalCode: '92615',
      },
    },
    lines: [
      {
        number: '1',
        quantity: 1,
        amount: 90,
        taxCode: 'PS081282',
        itemCode: 'Y0001',
        description: 'Yarn',
      },
    ],
    commit: true,
    currencyCode: 'USD',
    description: 'Yarn',
  },
};
