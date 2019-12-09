(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d4c7029"],{"609c":function(e,t,a){},af40:function(e,t,a){"use strict";var s=a("609c"),i=a.n(s);i.a},c0a9:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("Row",[a("Col",[a("Card",[a("Tabs",{attrs:{animated:!1},on:{"on-click":e.changeTab}},[a("TabPane",{attrs:{label:"登陆日志",name:"login"}}),a("TabPane",{attrs:{label:"操作日志",name:"operation"}}),a("TabPane",{attrs:{label:"游戏日志",name:"game"}})],1),a("Form",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.permTypes.includes("view"),expression:"this.$route.meta.permTypes.includes('view')"}],ref:"searchForm",staticClass:"search-form",attrs:{model:e.searchForm,inline:"","label-width":70}},[a("Form-item",{attrs:{label:"搜索日志"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",clearable:"",placeholder:"请输入搜索关键词"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}})],1),a("Form-item",{attrs:{label:"创建时间"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"daterange",format:"yyyy-MM-dd",clearable:"",placeholder:"选择起始时间"},on:{"on-change":e.selectDateRange},model:{value:e.selectDate,callback:function(t){e.selectDate=t},expression:"selectDate"}})],1),a("Form-item",{staticClass:"br",staticStyle:{"margin-left":"-35px"}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:e.handleSearch}},[e._v("搜索")]),a("Button",{on:{click:e.handleReset}},[e._v("重置")])],1)],1),a("Row",{staticClass:"operation"},[a("Button",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.permTypes.includes("clear"),expression:"this.$route.meta.permTypes.includes('clear')"}],attrs:{type:"error",icon:"md-trash"},on:{click:e.clearAll}},[e._v("清空全部")]),a("Button",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.permTypes.includes("delete"),expression:"this.$route.meta.permTypes.includes('delete')"}],attrs:{icon:"md-trash"},on:{click:e.delAll}},[e._v("批量删除")]),a("Button",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.permTypes.includes("view"),expression:"this.$route.meta.permTypes.includes('view')"}],attrs:{icon:"md-refresh"},on:{click:e.getLogList}},[e._v("刷新")]),e.operationLoading?a("circleLoading"):e._e()],1),a("Row",[a("Alert",{attrs:{"show-icon":""}},[e._v("\n            已选择 "),a("span",{staticClass:"select-count"},[e._v(e._s(e.selectCount))]),e._v(" 项\n            "),a("a",{staticClass:"select-clear",on:{click:e.clearSelectAll}},[e._v("清空")])])],1),a("Row",[a("Table",{ref:"table",attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data,sortable:"custom"},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect}})],1),a("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)],1)],1)},i=[],r=a("365c"),o=a("8465"),n={name:"role-manage",components:{circleLoading:o["default"]},data:function(){var e=this;return{loading:!0,operationLoading:!1,selectList:[],selectCount:0,selectDate:null,searchKey:"",searchForm:{type:1,pageNumber:1,pageSize:10,startDate:"",endDate:"",sort:"createTime",order:"asc"},columns:[{type:"selection",width:60,align:"center",fixed:"left"},{type:"index",width:60,align:"center",fixed:"left"},{title:"操作名称",key:"name",width:110,sortable:!0,fixed:"left"},{title:"请求类型",key:"requestType",width:120,align:"center",sortable:!0,filters:[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"DELETE",value:"DELETE"}],filterMultiple:!1,filterMethod:function(e,t){return"GET"==e?"GET"==t.requestType:"POST"==e?"POST"==t.requestType:"PUT"==e?"PUT"==t.requestType:"DELETE"==e?"DELETE"==t.requestType:void 0}},{title:"请求路径",width:150,key:"requestUrl"},{title:"请求参数",minWidth:200,key:"requestParam",tooltip:!0},{title:"登录用户",key:"username",width:105,sortable:!0},{title:"IP",key:"ip",width:120,sortable:!0},{title:"IP信息",key:"ipInfo",width:100,sortable:!0},{title:"耗时(毫秒)",key:"costTime",width:130,sortable:!0,align:"center",filters:[{label:"≤1000毫秒",value:0},{label:">1000毫秒",value:1}],filterMultiple:!1,filterMethod:function(e,t){return 0==e?t.costTime<=1e3:1==e?t.costTime>1e3:void 0}},{title:"日志类型",key:"logType",align:"center",width:120,render:function(e,t){return 0==t.row.logType?e("div",[e("Tag",{props:{color:"blue"}},"操作日志")]):1==t.row.logType?e("div",[e("Tag",{props:{color:"green"}},"登陆日志")]):2==t.row.logType?e("div",[e("Tag",{props:{color:"green"}},"游戏日志")]):void 0}},{title:"创建时间",key:"createTime",sortable:!0,width:150,sortType:"asc"},{title:"操作",key:"action",width:98,align:"center",fixed:"right",render:function(t,a){return t("div",[t("Button",{props:{type:"error",size:"small",disabled:!e.$route.meta.permTypes.includes("delete")},on:{click:function(){e.remove(a.row)}}},"删除")])}}],data:[],total:0}},methods:{init:function(){this.getLogList()},changeTab:function(e){"login"==e?this.searchForm.type=1:"operation"==e?this.searchForm.type=0:"game"==e&&(this.searchForm.type=2),this.getLogList()},changePage:function(e){this.searchForm.pageNumber=e,this.getLogList(),this.clearSelectAll()},changePageSize:function(e){this.searchForm.pageSize=e,this.getLogList()},selectDateRange:function(e){e&&(this.searchForm.startDate=e[0],this.searchForm.endDate=e[1])},handleSearch:function(){this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getLogList()},getLogList:function(){var e=this;this.$route.meta.permTypes.includes("view")?(this.loading=!0,this.searchForm.key=this.searchKey,Object(r["gb"])(this.searchForm).then((function(t){e.loading=!1,t.success&&(e.data=t.result.records,e.total=t.result.total,(t.result.content||t.result.totalElements)&&(e.data=t.result.content,e.total=t.result.totalElements))}))):this.loading=!1},handleReset:function(){this.searchKey="",this.selectDate=null,this.searchForm.startDate="",this.searchForm.endDate="",this.getLogList()},remove:function(e){var t=this;this.$Modal.confirm({title:"确认删除",content:"您确认要删除该条数据?",loading:!0,onOk:function(){Object(r["v"])(e.id).then((function(e){t.$Modal.remove(),e.success&&(t.$Message.success("删除成功"),t.init())}))}})},clearSelectAll:function(){this.$refs.table.selectAll(!1)},changeSelect:function(e){this.selectList=e,this.selectCount=e.length},changeSort:function(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"==e.order&&(this.searchForm.order=""),this.getLogList()},delAll:function(){var e=this;this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:function(){var t="";e.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),Object(r["v"])(t).then((function(t){e.$Modal.remove(),t.success&&(e.$Message.success("删除成功"),e.clearSelectAll(),e.init())}))}})},clearAll:function(){var e=this;this.$Modal.confirm({title:"请谨慎进行此操作！",content:"您确认要彻底清空删除所有数据?",onOk:function(){e.loading=!0;var t="";e.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),Object(r["q"])().then((function(t){e.loading=!1,t.success&&(e.$Message.success("清空日志成功"),e.clearSelectAll(),e.init())}))}})}},mounted:function(){this.init()}},l=n,c=(a("af40"),a("2877")),h=Object(c["a"])(l,s,i,!1,null,null,null);t["default"]=h.exports}}]);