(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73036822"],{2798:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"search"},[i("Row",[i("Col",[i("Card",[i("Row",{staticClass:"operation"},[i("Button",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.permTypes.includes("add"),expression:"this.$route.meta.permTypes.includes('add')"}],attrs:{type:"primary",icon:"md-add"},on:{click:e.addRole}},[e._v("添加角色")]),i("Button",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.permTypes.includes("delete"),expression:"this.$route.meta.permTypes.includes('delete')"}],attrs:{icon:"md-trash"},on:{click:e.delAll}},[e._v("批量删除")]),i("Button",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.permTypes.includes("view"),expression:"this.$route.meta.permTypes.includes('view')"}],attrs:{icon:"md-refresh"},on:{click:e.init}},[e._v("刷新")])],1),i("Row",[i("Alert",{attrs:{"show-icon":""}},[e._v("\n            已选择\n            "),i("span",{staticClass:"select-count"},[e._v(e._s(e.selectCount))]),e._v(" 项\n            "),i("a",{staticClass:"select-clear",on:{click:e.clearSelectAll}},[e._v("清空")])])],1),i("Row",[i("Table",{ref:"table",attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data,sortable:"custom"},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect}})],1),i("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[i("Page",{attrs:{current:e.pageNumber,total:e.total,"page-size":e.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)],1),i("Modal",{attrs:{title:e.modalTitle,"mask-closable":!1,width:500},model:{value:e.roleModalVisible,callback:function(t){e.roleModalVisible=t},expression:"roleModalVisible"}},[i("Form",{ref:"roleForm",attrs:{model:e.roleForm,"label-width":80,rules:e.roleFormValidate}},[i("FormItem",{attrs:{label:"角色名称",prop:"name"}},[i("Input",{attrs:{placeholder:"按照Spring Security约定建议以‘ROLE_’开头"},model:{value:e.roleForm.name,callback:function(t){e.$set(e.roleForm,"name",t)},expression:"roleForm.name"}})],1),i("FormItem",{attrs:{label:"备注",prop:"description"}},[i("Input",{model:{value:e.roleForm.description,callback:function(t){e.$set(e.roleForm,"description",t)},expression:"roleForm.description"}})],1)],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"text"},on:{click:e.cancelRole}},[e._v("取消")]),i("Button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitRole}},[e._v("提交")])],1)],1),i("Modal",{staticClass:"permModal",attrs:{title:e.modalTitle,"mask-closable":!1,width:500,styles:{top:"30px"}},model:{value:e.permModalVisible,callback:function(t){e.permModalVisible=t},expression:"permModalVisible"}},[i("Tree",{ref:"tree",attrs:{data:e.permData,multiple:"","show-checkbox":"",render:e.renderContent,"check-strictly":!0}}),e.treeLoading?i("Spin",{attrs:{size:"large"}}):e._e(),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"text"},on:{click:e.cancelPermEdit}},[e._v("取消")]),i("Select",{staticStyle:{width:"100px","text-align":"left","margin-right":"10px"},on:{"on-change":e.changeOpen},model:{value:e.openLevel,callback:function(t){e.openLevel=t},expression:"openLevel"}},[i("Option",{attrs:{value:"0"}},[e._v("展开所有")]),i("Option",{attrs:{value:"1"}},[e._v("收合所有")]),i("Option",{attrs:{value:"2"}},[e._v("仅展开一级")]),i("Option",{attrs:{value:"3"}},[e._v("仅展开两级")])],1),i("Button",{on:{click:e.selectTreeAll}},[e._v("全选/反选")]),i("Button",{attrs:{type:"primary",loading:e.submitPermLoading},on:{click:e.submitPermEdit}},[e._v("提交")])],1)],1)],1)},o=[],l=i("365c"),s=i("c276"),r={name:"role-manage",data:function(){var e=this;return{openLevel:"0",loading:!0,treeLoading:!0,depTreeLoading:!0,submitPermLoading:!1,submitDepLoading:!1,searchKey:"",sortColumn:"createTime",sortType:"desc",modalType:0,roleModalVisible:!1,permModalVisible:!1,depModalVisible:!1,modalTitle:"",roleForm:{name:"",description:""},roleFormValidate:{name:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]},submitLoading:!1,selectList:[],selectCount:0,columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"角色名称",key:"name",width:150,sortable:!0},{title:"备注",key:"description",minWidth:190,sortable:!0},{title:"创建时间",key:"createTime",width:160,sortable:!0,sortType:"desc"},{title:"更新时间",key:"updateTime",width:160,sortable:!0},{title:"是否设置为注册用户默认角色",key:"defaultRole",align:"center",width:180,render:function(t,i){return i.row.defaultRole?t("div",[t("Button",{props:{type:"success",size:"small",disabled:!e.$route.meta.permTypes.includes("setDefault")},style:{marginRight:"5px"},on:{click:function(){e.cancelDefault(i.row)}}},"取消默认")]):t("div",[t("Button",{props:{type:"info",size:"small",disabled:!e.$route.meta.permTypes.includes("setDefault")},style:{marginRight:"5px"},on:{click:function(){e.setDefault(i.row)}}},"设为默认")])}},{title:"操作",key:"action",align:"center",fixed:"right",width:300,render:function(t,i){return t("div",[t("Button",{props:{type:"warning",size:"small",disabled:!e.$route.meta.permTypes.includes("editPerm")},style:{marginRight:"5px"},on:{click:function(){e.editPerm(i.row)}}},"菜单权限"),t("Button",{props:{size:"small",disabled:!e.$route.meta.permTypes.includes("edit")},style:{marginRight:"5px"},on:{click:function(){e.edit(i.row)}}},"编辑"),t("Button",{props:{type:"error",size:"small",disabled:!e.$route.meta.permTypes.includes("delete")},on:{click:function(){e.remove(i.row)}}},"删除")])}}],data:[],pageNumber:1,pageSize:10,total:0,permData:[],editRolePermId:"",selectAllFlag:!1,depData:[],dataType:0}},methods:{init:function(){this.getRoleList(),this.getPermList()},renderContent:function(e,t){t.root,t.node;var i=t.data,n="";return n=0==i.level?"ios-navigate":1==i.level?"md-list-box":2==i.level?"md-list":3==i.level?"md-radio-button-on":"md-radio-button-off",e("span",{style:{display:"inline-block",cursor:"pointer"},on:{click:function(){i.checked=!i.checked}}},[e("span",[e("Icon",{props:{type:n,size:"16"},style:{"margin-right":"8px","margin-bottom":"3px"}}),e("span",{class:"ivu-tree-title"},i.title)])])},changePage:function(e){this.pageNumber=e,this.getRoleList(),this.clearSelectAll()},changePageSize:function(e){this.pageSize=e,this.getRoleList()},changeSort:function(e){this.sortColumn=e.key,this.sortType=e.order,"normal"==e.order&&(this.sortType=""),this.getRoleList()},getRoleList:function(){var e=this;if(this.$route.meta.permTypes.includes("view")){this.loading=!0;var t={pageNumber:this.pageNumber,pageSize:this.pageSize,sort:this.sortColumn,order:this.sort};Object(l["lb"])(t).then((function(t){e.loading=!1,t.success&&(e.data=t.result.records,e.total=t.result.total,(t.result.content||t.result.totalElements)&&(e.data=t.result.content,e.total=t.result.totalElements))}))}else this.loading=!1},getPermList:function(){var e=this;this.$route.meta.permTypes.includes("view")&&(this.treeLoading=!0,Object(l["R"])().then((function(t){e.treeLoading=!1,t.success&&(e.deleteDisableNode(t.result),e.permData=t.result)})))},deleteDisableNode:function(e){var t=this;e.forEach((function(e){-1==e.status&&(e.title="[已禁用] "+e.title,e.disabled=!0),e.children&&e.children.length>0&&t.deleteDisableNode(e.children)}))},cancelRole:function(){this.roleModalVisible=!1},submitRole:function(){var e=this;this.$refs.roleForm.validate((function(t){t&&(0==e.modalType?(e.submitLoading=!0,Object(l["g"])({name:e.roleForm.name,description:e.roleForm.description}).then((function(t){e.submitLoading=!1,t.success&&(e.$Message.success("操作成功"),e.getRoleList(),e.roleModalVisible=!1)}))):(e.submitLoading=!0,Object(l["J"])({id:e.roleForm.id,name:e.roleForm.name,description:e.roleForm.description}).then((function(t){e.submitLoading=!1,t.success&&(e.$Message.success("操作成功"),e.getRoleList(),e.roleModalVisible=!1)}))))}))},addRole:function(){this.modalType=0,this.modalTitle="添加角色",this.$refs.roleForm.resetFields(),delete this.roleForm.id,this.roleModalVisible=!0},edit:function(e){for(var t in this.modalType=1,this.modalTitle="编辑角色",this.$refs.roleForm.resetFields(),e)null==e[t]&&(e[t]="");var i=JSON.stringify(e),n=JSON.parse(i);this.roleForm=n,this.roleModalVisible=!0},remove:function(e){var t=this;this.$Modal.confirm({title:"确认删除",content:"您确认要删除角色 "+e.name+" ?",loading:!0,onOk:function(){Object(l["y"])(e.id).then((function(e){t.$Modal.remove(),e.success&&(t.$Message.success("删除成功"),t.getRoleList())}))}})},setDefault:function(e){var t=this;this.$Modal.confirm({title:"确认设置",content:"您确认要设置所选的 "+e.name+" 为注册用户默认角色?",loading:!0,onOk:function(){var i={id:e.id,isDefault:!0};Object(l["Kb"])(i).then((function(e){t.$Modal.remove(),e.success&&(t.$Message.success("操作成功"),t.getRoleList())}))}})},cancelDefault:function(e){var t=this;this.$Modal.confirm({title:"确认取消",content:"您确认要取消所选的 "+e.name+" 角色为默认?",loading:!0,onOk:function(){var i={id:e.id,isDefault:!1};Object(l["Kb"])(i).then((function(e){t.$Modal.remove(),e.success&&(t.$Message.success("操作成功"),t.getRoleList())}))}})},clearSelectAll:function(){this.$refs.table.selectAll(!1)},changeSelect:function(e){this.selectList=e,this.selectCount=e.length},delAll:function(){var e=this;this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:function(){var t="";e.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),Object(l["y"])(t).then((function(t){e.$Modal.remove(),t.success&&(e.$Message.success("删除成功"),e.clearSelectAll(),e.getRoleList())}))}})},editPerm:function(e){this.editRolePermId=e.id,this.modalTitle="分配 "+e.name+" 的菜单权限";var t=e.permissions;this.checkPermTree(this.permData,t),this.permModalVisible=!0},checkPermTree:function(e,t){var i=this;e.forEach((function(e){i.hasPerm(e,t)&&-1!=e.status?e.checked=!0:e.checked=!1,e.children&&e.children.length>0&&i.checkPermTree(e.children,t)}))},hasPerm:function(e,t){for(var i=!1,n=0;n<t.length;n++)if(e.id==t[n].permissionId){i=!0;break}return!!i},selectTreeAll:function(){this.selectAllFlag=!this.selectAllFlag;var e=this.selectAllFlag;this.selectedTreeAll(this.permData,e)},selectedTreeAll:function(e,t){var i=this;e.forEach((function(e){e.checked=t,e.children&&e.children.length>0&&i.selectedTreeAll(e.children,t)}))},submitPermEdit:function(){var e=this;this.submitPermLoading=!0;var t="",i=this.$refs.tree.getCheckedNodes();i.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),Object(l["K"])({roleId:this.editRolePermId,permIds:t}).then((function(t){e.submitPermLoading=!1,t.success&&(e.$Message.success("操作成功"),e.$store.commit("setAdded",!1),s["a"].initRouter(e),e.getRoleList(),e.permModalVisible=!1)}))},cancelPermEdit:function(){this.permModalVisible=!1},changeOpen:function(e){"0"==e?this.permData.forEach((function(e){e.expand=!0,e.children&&e.children.length>0&&e.children.forEach((function(e){e.expand=!0,e.children&&e.children.length>0&&e.children.forEach((function(e){e.expand=!0}))}))})):"1"==e?this.permData.forEach((function(e){e.expand=!1,e.children&&e.children.length>0&&e.children.forEach((function(e){e.expand=!1,e.children&&e.children.length>0&&e.children.forEach((function(e){e.expand=!1}))}))})):"2"==e?this.permData.forEach((function(e){e.expand=!0,e.children&&e.children.length>0&&e.children.forEach((function(e){e.expand=!1,e.children&&e.children.length>0&&e.children.forEach((function(e){e.expand=!1}))}))})):"3"==e&&this.permData.forEach((function(e){e.expand=!0,e.children&&e.children.length>0&&e.children.forEach((function(e){e.expand=!0,e.children&&e.children.length>0&&e.children.forEach((function(e){e.expand=!1}))}))}))}},mounted:function(){this.init()}},a=r,c=(i("4261"),i("2877")),d=Object(c["a"])(a,n,o,!1,null,null,null);t["default"]=d.exports},4261:function(e,t,i){"use strict";var n=i("640d"),o=i.n(n);o.a},"640d":function(e,t,i){}}]);