Ext.define('Compass.ErpApp.Mobile.StockFinder.Store.Stocks', {
  extend: 'Ext.data.Store',
  config: {
    model: 'Compass.ErpApp.Mobile.StockFinder.Stock',
    proxy:{
      autoLoad: true,
      url:'/erp_app/shared/stocks/data',
      type:'ajax',
      reader:{
        type:'json',
        rootProperty:'data'
      }
    }
  }
});

