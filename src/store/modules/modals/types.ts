export type TModulesState = {
	activeBlock: EBlocks | null
}

export enum EBlocks {
	activities = 'activities',
	date = 'date',
	status = 'status',
}
