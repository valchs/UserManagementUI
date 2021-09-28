export default {
    users(state) {
        return state.users;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if(!lastFetch) {
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
};