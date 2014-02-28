class CreateStockFinderOrganizerApplication
  def self.up
    OrganizerApplication.create(
      :description => 'Stock Finder',
      :icon => 'icon-stock',
      :javascript_class_name => 'Compass.ErpApp.Organizer.Applications.StockFinder.Base',
      :internal_identifier => 'stock_finder'
    )
  end

  def self.down
    OrganizerApplication.destroy_all(:conditions => ['internal_identifier = ?','stock_finder'])
  end
end
