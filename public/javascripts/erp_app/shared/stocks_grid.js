Ext.define("Compass.ErpApp.Shared.StocksGrid",{
  extend: "Ext.Panel",
  alias: "widget.shared_stocksgrid",
  layout: 'fit',
  border: 'false',
  items: [
    {
      xtype: 'panel',
      layout: 'fit',
      dockedItems: {
        xtype: 'toolbar',
        items: [
          {
            xtype: 'label',
            text: 'Symbols'
          },
          {
            xtype: 'textfield',
            width: 200
          },
          {
            xtype: "button",
            text: 'Search',
            iconCls: 'icon-search',
            handler: function (btn) {
              var grid = btn.up('panel').down('shared_dynamiceditablegridloaderpanel').down('shared_dynamiceditablegrid'),
              searchField = btn.up('panel').down('textfield');
              window.stock_details = searchField.getValue();
              grid.getStore().load({params:{symbols:searchField.getValue()}});
            }
          }
        ]
      },
      items: [
        {
          xtype: 'shared_dynamiceditablegridloaderpanel',
          editable: false,
          title: 'Stocks',
          setupUrl: '/erp_app/shared/stocks/setup',
          dataUrl: '/erp_app/shared/stocks/data',
          page: false
        }
      ]
    }
  ]
  
});
