Compass.ErpApp.Widgets.StockFinder = {
  addWidget:function(){
    Ext.getCmp('knitkitCenterRegion').addContentToActiveCodeMirror('<%= render_widget :stock_finder %>');
  }
}

Compass.ErpApp.Widgets.AvailableWidgets.push({
  name:'Stock Finder',
  iconUrl:'icon-stock',
  onClick:Compass.ErpApp.Widgets.StockFinder.addWidget,
  about:'What my new widget is about'
});
