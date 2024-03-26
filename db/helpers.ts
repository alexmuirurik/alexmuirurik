export const truncate = (input: string) =>
	input?.length > 100 ? `${input.substring(0, 90)}...` : input;