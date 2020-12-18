events.listen('recipes', event => {
  // OP Stuff Removal
  event.remove({output: 'kibe:glider_left_wing'})
  event.remove({output: 'kibe:glider_right_wing'})
  event.remove({output: 'kibe:angel_ring'})

  // Glitched Stuff Removal
  event.remove({output: 'waystones:waystone'})

  // Nuke Removal
  event.remove({output: 'astromine:nuclear_warhead'})

  // Decimal coins
  event.smelting(item.of('decimal_coins:coin_100', 2), 'minecraft:diamond')
})

events.listen('item.tags', event => {
  // Change item tags here
})