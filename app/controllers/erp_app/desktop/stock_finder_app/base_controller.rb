module ErpApp
  module Desktop
    module StockFinderApp
      class BaseController < ::ErpApp::Desktop::BaseController
        respond_to :json
        
        def stock_details
          render :json => {:data => get_stock_details_for(params[:stock_symbol]), :success => true}, :status => :ok
        end

        private

        def get_stock_details_for stock_symbols
          non_whitespaced_stock_symbols = stock_symbols.delete(" ")
          stocks_data = YahooFinance.get_quotes(YahooFinance::StandardQuote, non_whitespaced_stock_symbols)
          non_whitespaced_stock_symbols.split(",").collect do |stock_symbol|
            {
              :company => stocks_data[stock_symbol.upcase].name,
              :day_high => stocks_data[stock_symbol.upcase].dayHigh,
              :change_points => stocks_data[stock_symbol.upcase].changePoints,
              :change_percent => stocks_data[stock_symbol.upcase].changePercent,              
            }
          end
        end
      end
    end #StockFinderApp
  end #Desktop
end #ErpApp
