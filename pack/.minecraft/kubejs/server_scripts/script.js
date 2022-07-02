// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('HexMC Patches Reloaded')

global["REMOVED"] = [
	"illagerexp:imbuing_table",
	"things:arm_extender"
]

// Starting items
onEvent('player.logged_in', event => {
	// Check if player doesn't have items yet.
	if (!event.player.stages.has('starting_items')) {
		event.player.stages.add('starting_items')
		// Given Items
		event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book": "patchouli:hexmc_handbook"}'))
	}
})

onEvent('recipes', event => {
	// remove recipes
	event.remove({output: global["REMOVED"]})
})