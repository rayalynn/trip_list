object @place
attributes :id, :title, :headline, :notes, :isCompleted, :location, :completionDate,
           :tag_list

node(:photo_thumb) { |u| u.photo.url(:thumb) }
node(:photo_orig)  { |u| u.photo.url }


