module ErpApp
  module Desktop
    module StockFinderApp
      class BaseController < ::ErpApp::Desktop::BaseController
        respond_to :json
        
        def stock_details
          stock_data = YahooFinance.get_quotes(YahooFinance::StandardQuote, params[:stock_symbol])
          render :json => {:data => get_stock_details_for(params[:stock_symbol]), :success => true}, :status => :ok
        end

        private

        def get_stock_details_for stock_symbols
          stocks_data = YahooFinance.get_quotes(YahooFinance::StandardQuote, stock_symbols.delete(" "))
          stock_symbols.split(",").collect do |stock_symbol|
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
