<template>
    <div v-for="(item,index) in auditFormData.oldPhoneList" :key="index">
        <div class="flag-box">
            <span>{{ item.phoneNum }}（{{ item.startTime }} ~ {{ item.endTime || "至今" }})
            </span>
            <el-checkbox-group v-model="phoneCancel" @change="activeChange(item.status,index)">
                <el-checkbox :label="item.phoneNum" :disabled="item.status ===2">标记作废</el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
    <el-button @click="clickHanle">点击</el-button>
    {{phoneCancel}}
</template>

<script>
    export default {
        name: "checkTest",
        data() {
            return {
                phoneCancel: [],
                changeList: [],
                auditFormData: {
                    oldPhoneList: [
                        {
                            phoneNum: "13976311111",
                            startTime: "2020-01-01 10:01:01",
                            endTime: "2020-01-01 10:01:01",
                            status: 1
                        },
                        {
                            phoneNum: "13976311112",
                            startTime: "2020-01-01 10:01:02",
                            endTime: "2020-01-01 10:01:01",
                            status: 1
                        },
                        {
                            phoneNum: "13976311113",
                            startTime: "2020-01-01 10:01:03",
                            endTime: "2020-01-01 10:01:01",
                            status: 1
                        },
                        {
                            phoneNum: "13976311114",
                            startTime: "2020-01-01 10:01:04",
                            endTime: "2020-01-01 10:01:01",
                            status: 2
                        },
                        {
                            phoneNum: "13976311115",
                            startTime: "2020-01-01 10:01:05",
                            endTime: "2020-01-01 10:01:01",
                            status: 1
                        },
                    ]
                }
            }
        },
        methods: {
            clickHanle() {
                console.log(this.phoneCancel)
            },
            activeChange(val, index) {
                console.log(val, index);
                this.changeList.push(this.auditFormData.oldPhoneList[index].phoneNum);
                var temp_arr = this.changeList.filter(function (e, index, self) {
                    // console.log(e, index, self)
                    return self.indexOf(e) === index
                })
                console.log(temp_arr)
            },
        }
    }
</script>

<style scoped>
    ::v-deep(.el-checkbox-group) {
        display: inline-block;
        margin-left: 1vw;
    }
</style>
