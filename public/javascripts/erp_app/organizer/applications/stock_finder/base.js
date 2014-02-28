Ext.ns("Compass.ErpApp.Organizer.Applications.StockFinder");
 /**
 * Method to setup organizer application
 * @param {config} object containing (organizerLayout : reference to main layout container, widgetRoles : roles for widgets contained in this application)
 */
Compass.ErpApp.Organizer.Applications.StockFinder.Base = function(config){

  var treeMenuStore = Ext.create('Compass.ErpApp.Organizer.DefaultMenuTreeStore', {
    url:'/erp_app/organizer/stock_finder/menu',
    rootText:'Menu',
    rootIconCls:'icon-content'
  });
  
  var menuTreePanel = {
    xtype:'defaultmenutree',
    title:'StockFinder',
    store:treeMenuStore,
    menuRootIconCls:'icon-content',
    rootNodeTitle:'Menu',
    treeConfig:{
      store:treeMenuStore
    }
  };
  
    var examplePanel = new Ext.Panel({
      id:'stock_finder_example_panel',
      html:'<span style="color: green">Stock Finder</span>',
      layout:'fit',
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
            xtype: 'button',
            text: 'Search',
            iconCls: 'icon-search',
            handler: function(button){
              var grid = button.up('panel').down('shared_dynamiceditablegridloaderpanel').down('shared_dynamiceditablegrid'),
              searchField = button.up('panel').down('textfield');
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
          setupUrl: '/erp_app/desktop/stock_ticker/setup/',
          dataUrl: '/erp_app/desktop/stock_ticker/data/',
          grid_listeners: {
            itemdblclick: function(dv, record, item, index, e) {
              var store = this.getStore(),
              index = record.index;
              Ext.Ajax.request({
                url: '/erp_app/desktop/stock_ticker/data/',
                method: 'POST',
                params: {symbols: record.get('symbol')},
                success: function(responseObject){
                  var response =  Ext.decode(responseObject.responseText);
                  if(response.success){
                    store.remove(record);
                    store.add(response.data.first());
                  }
                }
              });

             // this.getStore().load({params:{symbols: record.get('symbol')}});
            }
          },
          page: false
        }
      ]

    });


    this.setup = function(){
        config['organizerLayout'].addApplication(menuTreePanel, [examplePanel]);
    };

};

