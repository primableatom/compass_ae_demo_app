CompassAeApp::Application.routes.draw do

  match '/erp_app/mobile/stock_finder(/:action)' => "erp_app/mobile/stock_finder/base"

  match '/erp_app/organizer/stock_finder(/:action)' => "erp_app/organizer/stock_finder/base"

  match '/erp_app/desktop/stock_ticker(/:action)' => "erp_app/desktop/stock_ticker/base"

  post 'erp_app/desktop/stock_finder_app/base/stock_details'
  
  match '/erp_app/desktop/stock_finder_app(/:action)' => "erp_app/desktop/stock_finder_app/base"

  match '/erp_app/desktop/example_app(/:action)' => "erp_app/desktop/example_app/base"

  match '/erp_app/shared/stocks(/:action)' => "erp_app/shared/stocks"
  
  #mount CompassAE engines
  ErpBaseErpSvcs.mount_compass_ae_engines(self)
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
