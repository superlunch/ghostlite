class User < ApplicationRecord
    has_secure_password
    
    belongs_to :job, optional: true
    belongs_to :production, optional: true

    validates :email, presence: true, uniqueness: true
    # validates :password, :first_name, :last_name, :phone, :dob, :emergency_name, :emergency_phone, :emergency_relationship, :job_id, presence: true
    validates :is_admin, inclusion: { in: [true, false] }
end
