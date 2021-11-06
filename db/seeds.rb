# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Clearing previous data...'


User.destroy_all
Ride.destroy_all
Category.destroy_all


puts 'Creating users...'
User.create(username: 'Shawna', email: 'shawna@yahoo.com', password: '1234', password_confirmation: '1234')
User.create(username: 'Bryson', email: 'bryson@gmail.com', password: '1234', password_confirmation: '1234')
User.create(username: 'Brenson', email: 'brenson@yahoo.com', password: '1234', password_confirmation: '1234')
User.create(username: 'Brilee', email: 'sunshine@gmail.com', password: '1234', password_confirmation: '1234')


puts 'Seeding categories...'
Category.create(name: 'Slow Rides')
Category.create(name: 'Water Rides')
Category.create(name: 'Thrill Rides')


puts 'Creating rides...'
Ride.create(title: 'Autopia', overview: 'Put the pedal to the metal on an unforgettable road trip along a miniature motorway. It is one of the original attractions that opened with the park on July 17, 1955.', poster_url: 'https://mickeymousepark.com/disneyland/att/poster/tms-588.jpg', trailer_url: 'https://youtu.be/T8k02VDl0P4', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'Buzz Lightyear Astro Blasters', overview: 'Space Rangers take aim and fire your laser to defeat Zurg during a thrilling space battle.', poster_url: 'https://m.media-amazon.com/images/I/8135CMQguXS._AC_SY741_.jpg', trailer_url: 'https://www.youtube.com/watch?v=nOGsB9dORBg', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'Big Thunder Mountain', overview: 'Streak through a haunted gold mine aboard a speeding train on this thrilling coaster-style ride', poster_url: 'https://i.pinimg.com/originals/50/13/c4/5013c436125a0c6730e2c4c8acd994bf.jpg', trailer_url: 'https://www.youtube.com/watch?v=gjk9JS56bwE', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'Disneyland Railroad', overview: 'Embark on a relaxing 18-minute scenic journey aboard an authentic steam-powered train around Disneyland Park.', poster_url: 'https://mickeymousepark.com/disneyland/att/poster/tms-588.jpg', trailer_url: 'https://www.youtube.com/watch?v=LjGwNjxeCQc', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'Haunted Mansion', overview: 'Take your seat in a gloomy Doom Buggy for a spooky tour through this house of happy haunts.', poster_url: 'https://m.media-amazon.com/images/I/51hGe3p85QL._AC_.jpg', trailer_url: 'https://www.youtube.com/watch?v=D79HY8YCVPc', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'Indiana Jones Adventure', overview: 'Embark on a fast-paced thrill ride in search of Indiana Jones—enter this cursed temple at your own risk!', poster_url: 'https://static.wikia.nocookie.net/lucasfilm/images/7/74/Indiana_Jones_Temple_of_the_Forbidden_Eye_Poster.jpg/revision/latest?cb=20130913174628', trailer_url: 'youtube.com/watch?v=Rz418ohs70g', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'Mad Tea Party', overview: 'Pour yourself into an oversized teacup and spin through a whimsical party.', poster_url: 'https://i.pinimg.com/originals/47/04/98/4704986c107fcf6b8f5234f6871d12c2.png', trailer_url: 'https://www.youtube.com/watch?v=B5ptGV0pMQw', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'Mark Twain Riverboat', overview: 'Cruise the scenic Rivers of America on a sightseeing tour aboard a majestic 19th-century paddle boat.', poster_url: 'https://i.ebayimg.com/images/g/Dv8AAOSwhiZaY5s2/s-l400.jpg', trailer_url: 'https://www.youtube.com/watch?v=dBpi8IslpKc', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'Pirates of the Caribbean', overview: 'Steer a course for the Golden Age of Piracy on a swashbuckling cruise through seas plagued by scoundrels.', poster_url: 'https://dyn1.heritagestatic.com/lf?set=path%5B2%2F1%2F7%2F0%2F1%2F21701960%5D&call=url%5Bfile%3Aproduct.chain%5D', trailer_url: 'https://www.youtube.com/watch?v=3vI-SnwuoNM', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'Star Wars: Rise of the Resistance', overview: 'Join the Resistance in an epic battle against the First Order on this exciting new ride.', poster_url: 'https://www.starwarsnewsnet.com/wp-content/uploads/2019/07/rrs2094802394823423424fi.jpg', trailer_url: 'https://www.youtube.com/watch?v=Y1b98-WEhG4', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'Radiator Spring Racers', overview: 'Start your engines! Zoom through the desert landscape of Cars Land, inspired by the Disney and Pixar movie Cars.', poster_url: 'https://vegalleries.com/sites/default/files/augdisneyana20130a.jpg', trailer_url: 'https://www.youtube.com/watch?v=PRGFi9kW8UA', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'Grizzly River Run', overview: 'Embark on a thrilling whitewater raft adventure that splashes you down a roaring California river deep in the mountains.', poster_url: 'https://i.pinimg.com/originals/fe/34/93/fe3493915e5cbbaa18d2ec481821cae9.jpg', trailer_url: 'https://www.youtube.com/watch?v=cQgt83Cnoo4', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'The Incredicoaster', overview: 'Join the Incredibles in a mad dash to catch Jack-Jack as he wreaks havoc throughout this high-speed chase!', poster_url: 'https://pbs.twimg.com/media/Dku7NS6XoAAUUzh.jpg', trailer_url: 'https://www.youtube.com/watch?v=TImWBazFS20&t=73s', category_id: 2, user_id: rand(1..5), favorite: false)
Ride.create(title: 'Guardians of the Galaxy Misson: BREAKOUT!', overview: 'Join Rocket on a thrilling mission to rescue the Guardians of the Galaxy from the Collector’s fortress.', poster_url: 'https://static.wikia.nocookie.net/disney/images/9/93/GaurdiansBreakoutPoster-cleaned-Medium.jpg/revision/latest?cb=20180620003508', trailer_url: 'https://www.youtube.com/watch?v=Hpd4JjJIROg', category_id: 2, user_id: rand(1..5), favorite: false)

puts 'Creating favorites...'

puts 'Seeding complete!'