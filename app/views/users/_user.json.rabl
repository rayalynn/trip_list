object @user
attributes :id, :first_name, :email

node(:avatar_thumb) { |u| u.avatar.url(:thumb) }
node(:avatar_orig)  { |u| u.avatar.url }
