import Category from 'models/category'
import Group from 'models/group'

const category = (c) => new Category(c)
const group = (g) => new Group(g)

const amenities = [
  group({ id: 'transport', icon: 'transportation', children: [
    category({ icon: 'parking', filter: 'amenity=parking' }),
    category({ icon: 'gas-station', filter: 'amenity=fuel' }),
    category({ icon: 'bicycle', filter: 'amenity=bicycle_parking' }),
  ]}),
  group({ id: 'food', icon: 'food', children: [
    category({ icon: 'restaurant', filter: 'amenity=restaurant' }),
    category({ icon: 'cafe', filter: 'amenity=cafe' }),
    category({ icon: 'hamburger', filter: 'amenity=fast_food' }),
    category({ icon: 'beer', filter: 'amenity=pub' }),
    category({ icon: 'bar', filter: 'amenity=bar' }),
    category({ icon: 'water', filter: 'amenity=drinking_water' }),
  ]}),
  group({ id: 'health', icon: 'health', children: [
    category({ icon: 'pill', filter: 'amenity=pharmacy' }),
    category({ icon: 'hospital', filter: 'amenity=hospital' }),
  ]}),
  group({ id: 'education', icon: 'knowledge', children: [
    category({ icon: 'school', filter: 'amenity=school' }),
    category({ icon: 'book', filter: 'amenity=library' }),
    category({ icon: 'children', filter: 'amenity=kindergarten' }),
  ]}),
  group({ id: 'public-services', icon: 'museum', children: [
    category({ icon: 'cathedral', filter: 'amenity=place_of_worship' }),
    category({ icon: 'police', filter: 'amenity=police' }),
    category({ icon: 'city-hall', filter: 'amenity=townhall' }),
    category({ icon: 'fire-station', filter: 'amenity=fire_station' }),
    category({ icon: 'post-office', filter: 'amenity=post_office' }),
    category({ icon: 'post-box', filter: 'amenity=post_box' }),
  ]}),
  group({ id: 'money', icon: 'money', children: [
    category({ icon: 'bank', filter: 'amenity=bank' }),
    category({ icon: 'atm', filter: 'amenity=atm' }),
  ]}),

  category({ icon: 'bench', filter: 'amenity=bench' }),
  category({ icon: 'waste', filter: 'amenity=waste_basket' }),
  category({ icon: 'toilet', filter: 'amenity=toilets' }),
  category({ icon: 'recycling', filter: 'amenity=recycling' }),
  category({ icon: 'home', filter: 'amenity=shelter' }),
  category({ icon: 'cemetery', filter: 'amenity=grave_yard' }),
  category({ icon: 'vending-machine', filter: 'amenity=vending_machine' }),
]

export default amenities
