class CreateStockFinderMobileApplication
  def self.up
    MobileApplication.create(
      :description => 'Stock Finder',
      :icon => 'icon-stock',
      :internal_identifier => 'stock_finder',
      :xtype => 'compass-erpapp-mobile-stock_finder-application'
    )
  end

  def self.down
    MobileApplication.destroy_all("internal_identifier = 'stock_finder'")
  end
end