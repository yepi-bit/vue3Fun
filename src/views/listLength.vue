<template>
    <div id="search">

        <header class="search-header">
            <div class="search-header__search">
                <el-input v-model="filter.name" type="text" placeholder="请输入搜索关键字..." @keyup.enter="searchByName()"/>
            </div>
			<div v-if="loading">
				<loadingCpm />
			</div>
        </header>
        <transition enter-active-class="fade-in">
            <article v-show="filterVisible" class="search-filter">
                <AwRadio v-model="filter.year" label="年份" :options="SEARCH_FILTER.RELEASE_TIME" :right-cancle="false"
                         @change="searchByFilter(true)"/>
                <AwRadio v-model="filter.letter" label="字母" :options="SEARCH_FILTER.LETTER" :right-cancle="false"
                         @change="searchByFilter(true)"/>
            </article>
        </transition>
    </div>
</template>

<script setup>
    import {SEARCH_FILTER} from '../utils/form.js'
    import {
        computed,
        reactive,
        ref
    } from 'vue'
    import loadingCpm from '../components/loadingCpm.vue'
    import AwRadio from '../components/Radio.vue'
    const isSearchFetching = ref(false)
    const filter = reactive({
        name: '',
        cate: -1,
        type: '',
        order: 'time',
        letter: '',
        year: 0
    })
	const loading = ref(true)
    const filterVisible = ref(true)

    const hasSearchKey = computed(() => filter.name !== '')

    const searchByName = () => {
        console.log('输出')

    }
    const searchByFilter = () => {
        isSearchFetching.value = true
    }
</script>
<style lang="less" scoped>
    #search {
        @rootGap: 30px;
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .search {
            .box {
                background: #fff;
            }

            &-header {
                display: flex;
                align-items: center;
                gap: 26px;
                width: 800px;

                // background: #fff;
                &__search {
                    position: relative;
                    width: 50%;
                    height: 100%;
                    color: #fff;

                    ::v-deep(.el-input) {
                        width: 100%;
                        height: 100%;
                        background: #fff;
                        outline: none;
                        border: none;
                        text-indent: 20px;
                        border-radius: 12px;
                        color: red;
                        font-size: 16px;
                    }

                    i {
                        position: absolute;
                        right: 16px;
                        top: 0;
                        bottom: 0;
                        margin: auto 0;
                        height: max-content;
                        font-size: 20px;
                        cursor: pointer;
                        transition: all 0.25s;

                        &:hover {
                            opacity: 0.6;
                        }
                    }
                }

                &__filter {
                    color: #fff;
                    font-size: 28px;
                    cursor: pointer;
                    transition: all 0.25s;

                    &.active {
                        color: #fff;
                    }

                    &:hover {
                        .active;
                    }
                }
            }

            &-filter {
                .box;
                display: flex;
                flex-direction: column;
                gap: 8px;
                width: 100%;
                padding: 16px 30px;
                box-sizing: border-box;
                user-select: none;
            }

            &-main {
                .box;
                position: relative;
                flex: 1;
                overflow-y: scroll;

                &__content {
                    display: grid;
                    grid-template-columns: repeat(8, 1fr);
                    gap: 16px 24px;
                    width: 100%;
                    padding: 30px;
                    box-sizing: border-box;
                    animation-duration: 0.25s;

                    @media screen and (max-width: 1600px) {
                        grid-template-columns: repeat(6, 1fr);
                    }

                    @media screen and (max-width: 1200px) {
                        grid-template-columns: repeat(4, 1fr);
                    }

                    @media screen and (min-width: 2300px) {
                        grid-template-columns: repeat(10, 1fr);
                    }

                    @media screen and (min-width: 3000px) {
                        grid-template-columns: repeat(14, 1fr);
                    }
                }

                &__loading {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 4;
                    background: #fff;
                    animation-duration: 0.5s;
                }
            }

            &-page {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0 auto;
                width: max-content;
                padding: 12px 16px;
                background: #fff;
                border-radius: 15px;
                box-shadow: 0 -2px 14px rgb(0 0 0 / 14%);
                transition: all 0.25s;
                opacity: 0.2;
                transform: translateY(70%);

                &:hover {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
    }
</style>
