module ErpApp
  module Organizer
    module StockFinder
      class BaseController < ::ErpApp::Organizer::BaseController

        def menu
          render :json => [{:text => 'Menu Item', :leaf => true, :iconCls => 'icon-stock', :applicationCardId => "stock_finder_example_panel"}]
        end

      end #BaseController
    end #StockFinder
  end #Organizer
end #ErpApp
