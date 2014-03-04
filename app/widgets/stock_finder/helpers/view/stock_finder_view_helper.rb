module StockFinderViewHelper
  #add helper methods for your engines views

  def decorate(value)
    if value.to_i > 0
      content_tag(:td, value, :style => 'color: green')
    else
      content_tag(:td, value, :style => 'color: red')
    end
  end


end
