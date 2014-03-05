class AddCustomerProspectReln
  
  def self.up
    #insert data here
    from_role = RoleType.find_by_internal_identifier('prospect')
    if from_role.nil?
      from_role = RoleType.create(:description => 'Prospect', :internal_identifier => 'prospect')
    end
    
    to_role = RoleType.find_by_internal_identifier('customer')
    if to_role.nil?
      to_role = RoleType.create(:description => 'Customer', :internal_identifier => 'customer')
    end

    RelationshipType.create(:description => 'Prospects Of Customer',
                            :name => 'Prospect Of Customer',
                            :internal_identifier => 'prospect_customer',
                            :valid_from_role => from_role,
                            :valid_to_role => to_role
    )
    
  end
  
  def self.down
    #remove data here
    
  end

end
