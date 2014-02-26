class CreateStockFinderAppDesktopApplication
  def self.up
    app = DesktopApplication.create(
      :description => 'Stock Finder App',
      :icon => 'icon-monitor',
      :javascript_class_name => 'Compass.ErpApp.Desktop.Applications.StockFinderApp',
      :internal_identifier => 'stock_finder_app',
      :shortcut_id => 'stock_finder_app-win'
    )

    app.preference_types << PreferenceType.iid('desktop_shortcut')
    app.preference_types << PreferenceType.iid('autoload_application')
    app.save

  end

  def self.down
    DesktopApplication.destroy_all(['internal_identifier = ?','stock_finder_app'])
  end
end
