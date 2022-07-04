export const allPositions = (state) => state.positions;

export const filteredPositions = (state, filter = []) => {
    if (filter.length === 0) return state.positions;

    return state.positions.filter(pos => {
        const characteristics = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

        return filter.every(f => characteristics.includes(f));
    });
}