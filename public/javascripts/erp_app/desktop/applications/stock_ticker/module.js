Ext.define("Compass.ErpApp.Desktop.Applications.StockTicker", {
    extend: "Ext.ux.desktop.Module",
    id: 'stock_ticker-win',
    init: function () {
        this.launcher = {
            text: 'Stock Ticker',
            iconCls: 'icon-stock',
            handler: this.createWindow,
            scope: this
        }
    },

    createWindow: function () {
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('stock_ticker');
        if (!win) {
            win = desktop.createWindow({
                id: 'stock_ticker',
                title: 'Stock Ticker',
                width: 1000,
                height: 550,
                iconCls: 'icon-stock',
                shim: false,
                animCollapse: false,
                constrainHeader: true,
                layout: 'fit',
                items: [
                  {
                    xtype: 'shared_stocksgrid'
                  }
                ]
            });
        }
        win.show();
    }
});
