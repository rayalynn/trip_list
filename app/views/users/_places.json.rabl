object @user.places
attributes :id, :title, :headline, :notes, :isCompleted,
           :location, :completionDate

node(:photo_thumb) { |u| u.photo.url(:thumb) }
node(:photo_orig)  { |u| u.photo.url }
