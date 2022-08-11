<template>
    <div class="aw-radio">
        <div v-if="label" class="aw-radio__label">{{ label }}：</div>
        <div v-for="{ name, value } in options" :key="value" :class="{ active: modelValue === value }"
             class="aw-radio__item" @click="itemClick(value)" @contextmenu.prevent="itemRightClick(value)">
            {{ name }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
				default:""
            },
            modelValue: {
                type: [String, Number],
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            rightCancle: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            itemClick(value) {
                console.log(value)
                emit('update:modelValue', value);
                emit('change', value)
            },
            itemRightClick(value) {
                if (!props.rightCancle) return;
                if (props.modelValue === value) {
                    emit('update:modelValue', '');
                    emit('change', '')
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .aw-radio {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        gap: 6px;
        flex-wrap: wrap;
        line-height: 16px;

        &__label {
            color: #fff;
            width: 21px;
        }

        &__item {
            display: flex;
            align-items: center;
            padding: 0 14px;
            height: 32px;
            transition: all 0.25s;
            border-radius: 8px;
            user-select: none;
            cursor: pointer;

            &.active {
                color: #fff;
                background: pink;
            }

            &:hover {
                .active;
            }
        }
    }
</style>
