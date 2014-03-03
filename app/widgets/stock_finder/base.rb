module Widgets
  module StockFinder
    class Base < ErpApp::Widgets::Base
  
      def index
        render :view => :index
      end
  
      #should not be modified
      #modify at your own risk
      def locate
        File.dirname(__FILE__)
      end
  
      class << self
        def title
          "Stock Finder"
        end
    
        def widget_name
          File.basename(File.dirname(__FILE__))
        end
      end

      
      def stock_details
        stock_params = params[:stock_symbols].blank? ? "yhoo,goog" : params[:stock_symbols] 
        @stock_details = get_stock_details_for(stock_params)
        render
      end
        
      private
      
      def get_stock_details_for(stock_symbols)
        last_update = Time.now.strftime('%m/%d/%Y %H:%M:%S')
        non_whitespaced_stock_symbols = stock_symbols.delete(" ")
        stocks_data = YahooFinance.get_quotes(YahooFinance::StandardQuote, non_whitespaced_stock_symbols)
        non_whitespaced_stock_symbols.split(",").collect do |stock_symbol|
          {
            :symbol => stocks_data[stock_symbol.upcase].symbol,
            :company => stocks_data[stock_symbol.upcase].name,
            :ask => stocks_data[stock_symbol.upcase].ask,
            :change_points => stocks_data[stock_symbol.upcase].changePoints,
            :change_percent => stocks_data[stock_symbol.upcase].changePercent,
            :last_update => last_update.to_s
          }
        end
      end

    end#Base
  end#StockFinder
end#Widgets
