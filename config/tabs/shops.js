import Category from 'models/category'
import Group from 'models/group'

const category = (c) => new Category(c)
const group = (g) => new Group(g)

const shops = [
  category({ icon: 'food', filter: 'shop=convenience' }),
  category({ icon: 'buying', filter: 'shop=supermarket' }),
  category({ icon: 'clothes', filter: 'shop=clothes' }),
  category({ icon: 'barber-scissors', filter: 'shop=hairdresser' }),
  category({ icon: 'bread', filter: 'shop=bakery' }),
  category({ icon: 'car-service', filter: 'shop=car_repair' }),
  category({ icon: 'car', filter: 'shop=car' }),
  category({ icon: 'news', filter: 'shop=kiosk' }),
  category({ icon: 'meat', filter: 'shop=butcher' }),
  category({ icon: 'maintenance', filter: 'shop=hardware' }),
  category({ icon: 'flowers', filter: 'shop=florist' }),
  category({ icon: 'mascara', filter: 'shop=beauty' }),
  category({ icon: 'chair', filter: 'shop=furniture' }),
  category({ icon: 'shop', filter: 'shop=mall' }),
  category({ icon: 'tv', filter: 'shop=electronics' }),
  category({ icon: 'boots', filter: 'shop=shoes' }),
  category({ icon: 'wine-bottle', filter: 'shop=alcohol' }),
  category({ icon: 'smartphone-tablet', filter: 'shop=mobile_phone' }),
  category({ icon: 'car-battery', filter: 'shop=car_parts' }),
  category({ icon: 'bicycle', filter: 'shop=bicycle' }),
  category({ icon: 'books', filter: 'shop=books' }),
  category({ icon: 'glasses', filter: 'shop=optician' }),
  category({ icon: 'jewelry', filter: 'shop=jewelry' }),
]

export default shops
