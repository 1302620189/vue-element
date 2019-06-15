<template>
    <div>
        <div class="table-btn">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="primary">重置</el-button>
            <el-button type="primary">点击</el-button>
        </div>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection">
            </el-table-column>
            <el-table-column label="日期">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="删除" :visible.sync="dialogVisible" width="30%">
            <span>确认要删除吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog title="编辑" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
export default {
    props: {},
    components: {},
    data() {
        return {
            input: "",
            dialogVisible: false,
            dialogFormVisible: false,
            form: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: ""
            },
            formLabelWidth: '120px',
            tableData: [
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-08",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-06",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-07",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                }
            ]
        };
    },
    computed: {},
    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleEdit(index, row) {
            console.log(index, row);
            this.dialogFormVisible = true;
        },
        handleDelete(index, row) {
            console.log(index, row);
            this.dialogVisible = true;
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
.table-btn {
    display: flex;
    width: 50%;
}
.el-input {
    margin-right: 10px;
}
</style>