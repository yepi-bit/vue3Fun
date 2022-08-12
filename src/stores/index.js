import { createStore } from "vuex";

const store = createStore({
    state: {
        playmvstop: false,
        url1: "",
        i: 0,
        audioxbox: [
            {
                id: "1",
                al: "境界的彼方",
                dt: "04:33",
                musicname: "daisy",
                singer: "STEREO DIVE FOUNDATION",
                url: "https://sound-ks1.cdn.missevan.com/aod/202010/31/6cf02602440a5fe2b00d3960f4258397141856.m4a",
                cover: "https://static.missevan.com/coversmini/201410/19/29dacd308434f4d8b1015043ae89c32d141933.jpg"
            },
            {
                id: "2",
                al: "乱",
                dt: "05:13",
                musicname: "最好的我",
                singer: "房祖名",
                url: "https://sound-ks1.cdn.missevan.com/aod/202112/13/76e0f45f3b756cb5fd82f4024a7e4b7e.m4a",
                cover: "https://static.missevan.com/coversmini/202202/25/cf7a067b1fa9fa1e637f142961d34634183055.jpg"
            },
            {
                id: "3",
                al: "",
                dt: "02:08",
                musicname: "Intro",
                singer: "#ラブリーミュージック",
                url: "https://sound-ks1.cdn.missevan.com/aod/202106/14/f14b848a15d6357bf2b5dc9c14fcb633.m4a",
                cover: "https://static.missevan.com/coversmini/202106/14/903d0dd3ad908b9c92e20879f55844c2164802.png"

            },
        ],
    },
    mutations: {
        addMusic(state, adds) {
            state.audioxbox.push({
                id: adds.amount5,
                al: adds.amount6,
                dt: adds.amount7,
                musicname: adds.amount1,
                singer: adds.amount2,
                url: adds.amount3,
                cover: adds.amount4,
            })
        },
        setthmeColor(state, setcolor) {
            state.themecolor = setcolor
        },
        setplaymvstop(state, statmv) {
            state.playmvstop = statmv
        },
    },
    getters: {
        showMusicinfo(state) {
            return state.audioxbox
        },
        showmusic(state) {
            return state.url1
        },
        playi(state) {
            return state.i
        },
        showmvstop(state) {
            return state.playmvstop
        },
    }
})

export default store
