Ext.define("Compass.ErpApp.Desktop.Applications.StockFinderApp",{
  extend:"Ext.ux.desktop.Module",
  id:'stock_finder_app-win',
  init : function(){
    this.launcher = {
      text: 'Stock Finder App',
      iconCls:'icon-monitor',
      handler: this.createWindow,
      scope: this
    };
  },
  
  createWindow : function(){
    var desktop = this.app.getDesktop();
    var win = desktop.getWindow('stock_finder_app');
    if(!win){
      win = desktop.createWindow({
        id: 'stock_finder_app',
        title:'Stock Finder App',
        width:1000,
        height:550,
        layout: 'auto',
        iconCls: 'icon-monitor',
        shim: false,
        animCollapse:false,
        constrainHeader:true,
        items:[
          {xtype: 'stockfinderapp-stockform'}, {xtype: 'stockfinderapp-stockgrid'}
        ]
      });
    }
    win.show();
  }
});


Ext.define('Compass.ErpApp.Desktop.Applications.StockFinderApp.StockForm', {
  extend: 'Ext.form.Panel',
  xtype: 'stockfinderapp-stockform',
  title: 'Stock Finder Form',
  bodyPadding: 5,
  width: 350,
  height: 150,
  url: '/erp_app/desktop/stock_finder_app/stock_details',
  
  // Fields will be arranged vertically, stretched to full width
  layout: 'anchor',
  defaults: {
    anchor: '100%'
  },
  
  // The fields
  defaultType: 'textfield',
  items: [{
    fieldLabel: 'Stock Symbol',
      name: 'stock_symbol',
    allowBlank: false
  }],
  // Reset and Submit buttons
  buttons: [{
    text: 'Reset',
    handler: function() {
      this.up('form').getForm().reset();
    }
  }, {
    text: 'See Details',
    formBind: true, //only enabled once the form is valid
    disabled: true,
    handler: function() {
      var self = this;
      var form = this.up('form').getForm();
      if (form.isValid()) {
        form.submit({
          success: function(form, action) {
            console.log("sucess");
            var stockList = self.up('form').up('#stock_finder_app').down('stockfinderapp-stockgrid');
            stockList.store.loadData([],false);
            Ext.each(action.result.data, function(stock, index){
              stockList.store.add(stock);
            });
            Ext.Msg.alert('Success', JSON.stringify(action.result.data));
          },
          failure: function(form, action) {
            Ext.Msg.alert('Failed', action.result.msg);
            }
        });
      }
    }
  }]
});


Ext.define('Compass.ErpApp.Desktop.Applications.StockFinderApp.StockGrid',{
  extend: 'Ext.grid.Panel',
  title: 'All Stock',
  height: '400',
  xtype: 'stockfinderapp-stockgrid',
  store: {
    fields: ['company', 'day_high', 'change_points', 'change_percent']
  },
  
  columns: [
    {header: 'Company',  dataIndex: 'company',  flex: 1},
    {header: 'Day High', dataIndex: 'day_high', flex: 1},
    {header: 'Change Points', dataIndex: 'change_points', flex: 1},
    {header: 'Change Perecent', dataIndex: 'change_percent', flex: 1}
  ]
    
});


  
  







