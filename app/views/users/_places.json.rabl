object @user.places
attributes :id, :title, :headline, :notes, :isCompleted, 
           :location, :completionDate, :tag_list, :tag_cloud

node(:photo_thumb) { |u| u.photo.url(:thumb) }
node(:photo_orig)  { |u| u.photo.url }
