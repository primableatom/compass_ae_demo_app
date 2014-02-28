class CreateStockTickerDesktopApplication
  def self.up
    app = DesktopApplication.create(
      :description => 'Stock Ticker',
      :icon => 'icon-stock',
      :javascript_class_name => 'Compass.ErpApp.Desktop.Applications.StockTicker',
      :internal_identifier => 'stock_ticker',
      :shortcut_id => 'stock_ticker-win'
    )

    app.preference_types << PreferenceType.iid('desktop_shortcut')
    app.preference_types << PreferenceType.iid('autoload_application')
    app.save

  end

  def self.down
    DesktopApplication.destroy_all(['internal_identifier = ?','stock_ticker'])
  end
end
