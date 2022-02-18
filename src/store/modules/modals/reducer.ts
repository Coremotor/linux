import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EBlocks, TModulesState } from 'store/modules/modals/types'

const initialState: TModulesState = {
	activeBlock: null,
}

const userSlice = createSlice({
	name: 'modules',
	initialState,
	reducers: {
		setActiveHeaderBlock(
			state: TModulesState,
			action: PayloadAction<EBlocks | null>
		) {
			state.activeBlock = action.payload
		},
	},
})

export const { setActiveHeaderBlock } = userSlice.actions

export default userSlice.reducer
