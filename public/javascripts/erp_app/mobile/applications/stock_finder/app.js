Ext.define('Compass.ErpApp.Mobile.StockFinder.Application', {
  extend: 'Ext.Panel',
  xtype: 'compass-erpapp-mobile-stock_finder-application',
  config:{
    layout: 'card',
    tabBarPosition: 'bottom'
  },

  constructor: function(config){
    var self = this;
    this.store = Ext.create('Compass.ErpApp.Mobile.StockFinder.Store.Stocks', {
      storeId: 'stockfinder-stockstore'
    });
    this.store.load();
    
    config['items'] = [
      {
        xtype: 'toolbar',
        ui: 'light',
        iconMask:true,
        docked: 'top',
        items: [
          {
            text: 'Home',
            ui: 'back',
            handler: function (btn) {
              btn.up('#mainContainer').setActiveItem('#home');
            }
          },
          {
            xtype: 'searchfield',
            name: 'query',
            placeHolder: "yhoo,goog", 
            listeners: {
              action: function(field){
                var stock_symbols = field.getValue();
                self.store.load({params: {symbols: stock_symbols}});
              }
            }
          }
        ]
        
      },
      {
        xtype: 'list',
        store: 'stockfinder-stockstore',
        itemTpl: [
          '<div><strong>Company: </strong><span><b>{name}</b></span></div>',
          '<div><strong>Symbol: </strong><span>{symbol}</span></div>',
          '<div><strong>Ask: </strong><span>{ask}</span></div>',
          '<div><strong>Change: </strong><span class={[parseInt(values.change)>0]}>{change}</span></div>',
          '<div><strong>Change %: </strong> <span class={[parseInt(values.change)>0]}>{changePercent}</span></div>',
          '<div><strong>Last Update: </strong><span>{lastUpdate}</span></div>'
        ]
        
      }
    ];
    this.callParent([config]);
  }
});
