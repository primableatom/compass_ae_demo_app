module ErpApp
  module Mobile
    module StockFinder
      class BaseController < ::ErpApp::Mobile::BaseController

        def index
          render :json => {:success => true, :message => 'Hello World'}
        end
        
      end #BaseController
    end #StockFinder
  end #Mobile
end #ErpApp
