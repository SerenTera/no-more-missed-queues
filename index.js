module.exports = function nomoremissqueues(mod) {
	const notifier = mod.require.notifier
	
	mod.hook('S_FIN_INTER_PARTY_MATCH', 'raw', () => { 
		notifier.message('IMS Queue Popped!!!')
	})
	
	mod.hook('S_BATTLE_FIELD_ENTRANCE_INFO', 'raw', () => {
		notifier.message('Battleground Queue Popped!!!')
	})		
}