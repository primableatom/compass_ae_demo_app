module ErpApp
  module Shared
    class Shared::StocksController < ::ErpApp::Desktop::BaseController
      before_filter :require_login
     
      def setup
        #
        # Javascript render helpers
        #
        change_render = "function(val) {
            if (val > 0) {
                return '<span style=\"color:green;\">' + val + '</span>';
            } else if(val < 0) {
                return '<span style=\"color:red;\">' + val + '</span>';
            }
            return val;
            }"
        
        pct_change_render = "function(val) {
            if (val > 0) {
                return '<span style=\"color:green;\">' + val + '%</span>';
            } else if(val < 0) {
                return '<span style=\"color:red;\">' + val + '%</span>';
            }
            return val;
            }"
        
        #
        # Column definitions for grid
        #
        
        columns = []
        columns << {text: 'Symbol', dataIndex: 'symbol'}
        columns << {text: 'Name', dataIndex: 'name'}
        columns << {text: 'Ask', dataIndex: 'ask', renderer: NonEscapeJsonString.new('Ext.util.Format.usMoney')}
        columns << {text: 'Change', dataIndex: 'change', renderer: NonEscapeJsonString.new(change_render)}
        columns << {text: 'Change %', dataIndex: 'changePercent', renderer: NonEscapeJsonString.new(pct_change_render)}
        columns << {text: 'Last Update', dataIndex: 'lastUpdate', width:200, xtype: 'datecolumn', format: 'm/d/Y : h:i:s'}
        
        #
        # Field definitions for grid
        #
        fields = []
        fields << {name: 'symbol', type: 'string'}
        fields << {name: 'name', type: 'string'}
        fields << {name: 'ask', type: 'float'}
        fields << {name: 'change', type: 'float'}
        fields << {name: 'changePercent', type: 'float'}
        fields << {name: 'lastUpdate', type: 'date'}
        
        render :json => {success: true, columns: columns, fields: fields}
        end
      
      def data
        quote_symbols = params[:symbols] || "yhoo,goog"
        
        quote_data = []
        last_update = Time.now.strftime('%m/%d/%Y %H:%M:%S')
        quote_type = YahooFinance::StandardQuote
        
        YahooFinance::get_quotes(quote_type, quote_symbols) do |qt|
          quote_data << {
            :symbol => qt.symbol,
            :name => qt.name,
            :ask => qt.ask,
            :change => qt.changePoints,
            :changePercent => qt.changePercent,
            :lastUpdate => last_update.to_s
          }
        end
        
        render :json => {success: true, :data => quote_data}
      end
      
    end#StocksController
  end#Shared 
end #ErpApp
