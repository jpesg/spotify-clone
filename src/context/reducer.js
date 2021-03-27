export const initialState = {
    user: null,
    token: 'BQC-Dk5sm3J2uSJRjxQu7oIqIjSUEZM0g5TKLx_rP-BjX4Q0ndBhOO0HgVCTOoZBGR0KJuJUyLN0KmxMLSNHzvvcoSM8SFu-1RLNJlWiaxDOZn72JDpWagdi4ZuAE-pZzWymHBqoYHdIOucwb6UJhs6y0qrgq1j9_TP07OwKcMA7vxVo',
    playlists: [],
    playing: false,
    item: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };
        default:
            return state;
    }
};

export default reducer;