Ext.define('Compass.ErpApp.Mobile.StockFinder.Stock',{
  extend:'Ext.data.Model',
  config:{
    fields:[
      {name: 'symbol', type:'string'},
      {name: 'name', type:'string'},
      {name: 'ask', type:'float'},
      {name: 'change', type:'float'},
      {name: 'changePercent', type: 'float'},
      {name: 'lastUpdate', type:'date'}
    ]
  }
});
