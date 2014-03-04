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
      layout: 'fit',
      items:[
        {
          xtype: 'shared_stocksgrid'
        }
      ]
    });


    this.setup = function(){
        config['organizerLayout'].addApplication(menuTreePanel, [examplePanel]);
    };

};

