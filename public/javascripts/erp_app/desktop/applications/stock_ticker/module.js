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
                        xtype: 'panel',
                        layout: 'fit',
                        dockedItems: {
                            xtype: 'toolbar',
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Symobols'
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
                                setupUrl: '/erp_app/desktop/stock_ticker/setup/',
                                dataUrl: '/erp_app/desktop/stock_ticker/data/',
                                page: false
                            }
                        ]
                    }
                ]
            });
        }
        win.show();
    }
});
