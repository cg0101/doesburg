import VueGridLayout from './components/Grid.vue';
import DbStore from './store/index'


function factory(options = {}){

    let grid = {
        ...VueGridLayout,
        components: {}
    };

    if(options.dbStore && options.dbStore instanceof DbStore.Store){
        grid.dbStore = options.dbStore;
    }

    return grid;
}

export default {
    createGrid: factory,
    grid: VueGridLayout,
    DbStore: DbStore
};