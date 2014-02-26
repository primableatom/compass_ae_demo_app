class CreateExampleAppDesktopApplication
  def self.up
    app = DesktopApplication.create(
      :description => 'Desktop App Demo',
      :icon => 'icon-monitor',
      :javascript_class_name => 'Compass.ErpApp.Desktop.Applications.ExampleApp',
      :internal_identifier => 'example_app',
      :shortcut_id => 'example_app-win'
    )

    app.preference_types << PreferenceType.iid('desktop_shortcut')
    app.preference_types << PreferenceType.iid('autoload_application')
    app.save

  end

  def self.down
    DesktopApplication.destroy_all(['internal_identifier = ?','example_app'])
  end
end
