(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d4e083c"],{"3a08":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("Card",[n("Row",{staticClass:"operation"},[n("Button",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.permTypes.includes("add"),expression:"this.$route.meta.permTypes.includes('add')"}],attrs:{type:"primary",icon:"md-add"},on:{click:e.addMenu}},[e._v("添加子节点")]),n("Button",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.permTypes.includes("add"),expression:"this.$route.meta.permTypes.includes('add')"}],attrs:{icon:"md-add"},on:{click:e.addRootMenu}},[e._v("添加顶部菜单")]),n("Button",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.permTypes.includes("delete"),expression:"this.$route.meta.permTypes.includes('delete')"}],attrs:{icon:"md-trash"},on:{click:e.delAll}},[e._v("批量删除")]),n("Dropdown",{on:{"on-click":e.handleDropdown}},[n("Button",[e._v("\n          更多操作\n          "),n("Icon",{attrs:{type:"md-arrow-dropdown"}})],1),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.permTypes.includes("view"),expression:"this.$route.meta.permTypes.includes('view')"}],attrs:{name:"refresh"}},[e._v("刷新")]),n("DropdownItem",{attrs:{name:"expandOne"}},[e._v("收合所有")]),n("DropdownItem",{attrs:{name:"expandTwo"}},[e._v("仅展开一级")]),n("DropdownItem",{attrs:{name:"expandThree"}},[e._v("仅展开两级")]),n("DropdownItem",{attrs:{name:"expandAll"}},[e._v("展开所有")])],1)],1),n("i-switch",{staticStyle:{"margin-left":"5px"},attrs:{size:"large"},model:{value:e.strict,callback:function(t){e.strict=t},expression:"strict"}},[n("span",{attrs:{slot:"open"},slot:"open"},[e._v("级联")]),n("span",{attrs:{slot:"close"},slot:"close"},[e._v("单选")])])],1),n("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"start"}},[n("Col",{attrs:{span:"6"}},[n("Alert",{attrs:{"show-icon":""}},[e._v("\n          当前选择编辑：\n          "),n("span",{staticClass:"select-title"},[e._v(e._s(e.editTitle))]),e.menuForm.id?n("a",{staticClass:"select-clear",on:{click:e.cancelEdit}},[e._v("取消选择")]):e._e()]),n("Input",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.permTypes.includes("search"),expression:"this.$route.meta.permTypes.includes('search')"}],attrs:{suffix:"ios-search",placeholder:"输入菜单名搜索",clearable:""},on:{"on-change":e.search},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}}),n("div",{staticClass:"tree-bar",style:{maxHeight:e.maxHeight}},[n("Tree",{ref:"tree",attrs:{data:e.data,"show-checkbox":"",render:e.renderContent,"check-strictly":!e.strict},on:{"on-check-change":e.changeSelect}})],1),e.loading?n("Spin",{attrs:{size:"large",fix:""}}):e._e()],1),n("Col",{staticStyle:{"margin-left":"10px"},attrs:{span:"9"}},[n("Form",{ref:"menuForm",attrs:{model:e.menuForm,"label-width":100,rules:e.menuFormValidate}},[n("FormItem",{attrs:{label:"类型",prop:"type"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:-1==e.menuForm.type,expression:"menuForm.type==-1"}]},[n("Icon",{staticStyle:{margin:"0 5px 3px 0"},attrs:{type:"ios-navigate-outline",size:"16"}}),n("span",[e._v("顶部菜单")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:0==e.menuForm.type,expression:"menuForm.type==0"}]},[n("Icon",{staticStyle:{margin:"0 5px 3px 0"},attrs:{type:"ios-list-box-outline",size:"16"}}),n("span",[e._v("页面菜单")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.menuForm.type,expression:"menuForm.type==1"}]},[n("Icon",{staticStyle:{margin:"0 5px 3px 0"},attrs:{type:"md-radio-button-on",size:"16"}}),n("span",[e._v("操作按钮")])],1)]),-1==e.menuForm.type||0==e.menuForm.type?n("FormItem",{attrs:{label:"名称",prop:"title"}},[n("Input",{model:{value:e.menuForm.title,callback:function(t){e.$set(e.menuForm,"title",t)},expression:"menuForm.title"}})],1):e._e(),1==e.menuForm.type?n("FormItem",{attrs:{label:"名称",prop:"title"}},[n("Tooltip",{attrs:{placement:"right",content:"操作按钮名称不得重复"}},[n("Input",{model:{value:e.menuForm.title,callback:function(t){e.$set(e.menuForm,"title",t)},expression:"menuForm.title"}})],1)],1):e._e(),0==e.menuForm.type?n("FormItem",{attrs:{label:"路径",prop:"path"}},[n("Input",{model:{value:e.menuForm.path,callback:function(t){e.$set(e.menuForm,"path",t)},expression:"menuForm.path"}})],1):e._e(),1==e.menuForm.type?n("FormItem",{attrs:{label:"请求路径",prop:"path"}},[n("Tooltip",{attrs:{placement:"right","max-width":230,transfer:"",content:"填写后台请求URL，后台将作权限拦截，若无可填写'无'或其他"}},[n("Input",{model:{value:e.menuForm.path,callback:function(t){e.$set(e.menuForm,"path",t)},expression:"menuForm.path"}})],1)],1):e._e(),1==e.menuForm.type?n("FormItem",{attrs:{label:"按钮权限类型",prop:"buttonType"}},[n("Select",{attrs:{placeholder:"请选择或输入搜索",filterable:"",clearable:""},model:{value:e.menuForm.buttonType,callback:function(t){e.$set(e.menuForm,"buttonType",t)},expression:"menuForm.buttonType"}},e._l(e.dictPermissions,(function(t,o){return n("Option",{key:o,attrs:{value:t.value}},[e._v(e._s(t.title))])})),1)],1):e._e(),-1==e.menuForm.type?n("FormItem",{attrs:{label:"英文名",prop:"name"}},[n("Tooltip",{attrs:{placement:"right",content:"需唯一"}},[n("Input",{model:{value:e.menuForm.name,callback:function(t){e.$set(e.menuForm,"name",t)},expression:"menuForm.name"}})],1)],1):e._e(),0==e.menuForm.type?n("FormItem",{attrs:{label:"路由英文名",prop:"name"}},[n("Tooltip",{attrs:{placement:"right",content:"需唯一"}},[n("Input",{model:{value:e.menuForm.name,callback:function(t){e.$set(e.menuForm,"name",t)},expression:"menuForm.name"}})],1)],1):e._e(),-1==e.menuForm.type||0==e.menuForm.type?n("FormItem",{attrs:{label:"图标",prop:"icon"}},[n("icon-choose",{model:{value:e.menuForm.icon,callback:function(t){e.$set(e.menuForm,"icon",t)},expression:"menuForm.icon"}})],1):e._e(),0==e.menuForm.type?n("FormItem",{attrs:{label:"前端组件",prop:"component"}},[n("Input",{model:{value:e.menuForm.component,callback:function(t){e.$set(e.menuForm,"component",t)},expression:"menuForm.component"}})],1):e._e(),0==e.menuForm.type?n("FormItem",{attrs:{label:"第三方网页链接",prop:"url"}},[n("Tooltip",{attrs:{placement:"right",content:"前端组件需为 sys/monitor/monitor 时生效"}},[n("Input",{attrs:{placeholder:"http://"},model:{value:e.menuForm.url,callback:function(t){e.$set(e.menuForm,"url",t)},expression:"menuForm.url"}})],1)],1):e._e(),n("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[n("InputNumber",{attrs:{max:1e3,min:0},model:{value:e.menuForm.sortOrder,callback:function(t){e.$set(e.menuForm,"sortOrder",t)},expression:"menuForm.sortOrder"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("值越小越靠前，支持小数")])],1),1==e.menuForm.level?n("FormItem",{attrs:{label:"始终显示",prop:"showAlways"}},[n("i-switch",{attrs:{size:"large"},model:{value:e.menuForm.showAlways,callback:function(t){e.$set(e.menuForm,"showAlways",t)},expression:"menuForm.showAlways"}},[n("span",{attrs:{slot:"open"},slot:"open"},[e._v("启用")]),n("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁用")])]),n("Tooltip",{staticStyle:{display:"inline-block !important"},attrs:{content:"当设为不始终显示时，一级菜单下仅有一个子级菜单只会显示该子级菜单，避免用户多次点击",placement:"right",transfer:"","max-width":"280"}},[n("Icon",{staticStyle:{"margin-left":"10px",cursor:"pointer"},attrs:{type:"md-help-circle",size:"20",color:"#c5c5c5"}})],1)],1):e._e(),n("FormItem",{attrs:{label:"是否启用",prop:"status"}},[n("i-switch",{attrs:{size:"large","true-value":0,"false-value":-1},model:{value:e.menuForm.status,callback:function(t){e.$set(e.menuForm,"status",t)},expression:"menuForm.status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[e._v("启用")]),n("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁用")])])],1),n("Form-item",[n("Button",{staticStyle:{"margin-right":"5px"},attrs:{loading:e.submitLoading,type:"primary",icon:"ios-create-outline",disabled:!this.$route.meta.permTypes.includes("edit")},on:{click:e.submitEdit}},[e._v("修改并保存")]),n("Button",{on:{click:e.handleReset}},[e._v("重置")])],1)],1)],1)],1)],1),n("Modal",{attrs:{draggable:"",title:e.modalTitle,"mask-closable":!1,width:500,styles:{top:"30px"}},model:{value:e.menuModalVisible,callback:function(t){e.menuModalVisible=t},expression:"menuModalVisible"}},[n("Form",{ref:"menuFormAdd",attrs:{model:e.menuFormAdd,"label-width":100,rules:e.menuFormValidate}},[e.showParent?n("div",[n("FormItem",{attrs:{label:"上级节点："}},[e._v(e._s(e.parentTitle))])],1):e._e(),n("FormItem",{attrs:{label:"类型",prop:"type"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:-1==e.menuFormAdd.type,expression:"menuFormAdd.type==-1"}]},[n("Icon",{staticStyle:{margin:"0 5px 3px 0"},attrs:{type:"ios-navigate-outline",size:"16"}}),n("span",[e._v("顶部菜单")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:0==e.menuFormAdd.type,expression:"menuFormAdd.type==0"}]},[n("Icon",{staticStyle:{margin:"0 5px 3px 0"},attrs:{type:"ios-list-box-outline",size:"16"}}),n("span",[e._v("页面菜单")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.menuFormAdd.type,expression:"menuFormAdd.type==1"}]},[n("Icon",{staticStyle:{margin:"0 5px 3px 0"},attrs:{type:"md-radio-button-on",size:"16"}}),n("span",[e._v("操作按钮")])],1)]),-1==e.menuFormAdd.type||0==e.menuFormAdd.type?n("FormItem",{attrs:{label:"名称",prop:"title"}},[n("Input",{model:{value:e.menuFormAdd.title,callback:function(t){e.$set(e.menuFormAdd,"title",t)},expression:"menuFormAdd.title"}})],1):e._e(),1==e.menuFormAdd.type?n("FormItem",{attrs:{label:"名称",prop:"title"}},[n("Tooltip",{attrs:{placement:"right",content:"操作按钮名称不得重复"}},[n("Input",{staticStyle:{width:"368px"},model:{value:e.menuFormAdd.title,callback:function(t){e.$set(e.menuFormAdd,"title",t)},expression:"menuFormAdd.title"}})],1)],1):e._e(),0==e.menuFormAdd.type?n("FormItem",{attrs:{label:"路径",prop:"path"}},[n("Input",{model:{value:e.menuFormAdd.path,callback:function(t){e.$set(e.menuFormAdd,"path",t)},expression:"menuFormAdd.path"}})],1):e._e(),1==e.menuFormAdd.type?n("FormItem",{attrs:{label:"请求路径",prop:"path"}},[n("Tooltip",{attrs:{placement:"right","max-width":230,transfer:"",content:"填写后台请求URL，后台将作权限拦截，若无可填写'无'或其他"}},[n("Input",{staticStyle:{width:"368px"},model:{value:e.menuFormAdd.path,callback:function(t){e.$set(e.menuFormAdd,"path",t)},expression:"menuFormAdd.path"}})],1)],1):e._e(),1==e.menuFormAdd.type?n("FormItem",{attrs:{label:"按钮权限类型",prop:"buttonType"}},[n("Select",{attrs:{placeholder:"请选择或输入搜索",filterable:"",clearable:""},model:{value:e.menuFormAdd.buttonType,callback:function(t){e.$set(e.menuFormAdd,"buttonType",t)},expression:"menuFormAdd.buttonType"}},e._l(e.dictPermissions,(function(t,o){return n("Option",{key:o,attrs:{value:t.value}},[e._v(e._s(t.title))])})),1)],1):e._e(),-1==e.menuFormAdd.type?n("FormItem",{attrs:{label:"英文名",prop:"name"}},[n("Tooltip",{attrs:{placement:"right",content:"需唯一"}},[n("Input",{model:{value:e.menuFormAdd.name,callback:function(t){e.$set(e.menuFormAdd,"name",t)},expression:"menuFormAdd.name"}})],1)],1):e._e(),0==e.menuFormAdd.type?n("FormItem",{attrs:{label:"路由英文名",prop:"name"}},[n("Tooltip",{attrs:{placement:"right",content:"需唯一"}},[n("Input",{staticStyle:{width:"368px"},model:{value:e.menuFormAdd.name,callback:function(t){e.$set(e.menuFormAdd,"name",t)},expression:"menuFormAdd.name"}})],1)],1):e._e(),-1==e.menuFormAdd.type||0==e.menuFormAdd.type?n("FormItem",{attrs:{label:"图标",prop:"icon"}},[n("icon-choose",{model:{value:e.menuFormAdd.icon,callback:function(t){e.$set(e.menuFormAdd,"icon",t)},expression:"menuFormAdd.icon"}})],1):e._e(),0==e.menuFormAdd.type?n("FormItem",{attrs:{label:"前端组件",prop:"component"}},[n("Input",{model:{value:e.menuFormAdd.component,callback:function(t){e.$set(e.menuFormAdd,"component",t)},expression:"menuFormAdd.component"}})],1):e._e(),0==e.menuFormAdd.type?n("FormItem",{attrs:{label:"第三方网页链接",prop:"url"}},[n("Tooltip",{attrs:{placement:"right",content:"前端组件需为 sys/monitor/monitor 时生效"}},[n("Input",{staticStyle:{width:"368px"},attrs:{placeholder:"http://"},model:{value:e.menuFormAdd.url,callback:function(t){e.$set(e.menuFormAdd,"url",t)},expression:"menuFormAdd.url"}})],1)],1):e._e(),n("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[n("InputNumber",{attrs:{max:1e3,min:0},model:{value:e.menuFormAdd.sortOrder,callback:function(t){e.$set(e.menuFormAdd,"sortOrder",t)},expression:"menuFormAdd.sortOrder"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("值越小越靠前，支持小数")])],1),1==e.menuFormAdd.level?n("FormItem",{attrs:{label:"始终显示",prop:"showAlways"}},[n("i-switch",{attrs:{size:"large"},model:{value:e.menuFormAdd.showAlways,callback:function(t){e.$set(e.menuFormAdd,"showAlways",t)},expression:"menuFormAdd.showAlways"}},[n("span",{attrs:{slot:"open"},slot:"open"},[e._v("启用")]),n("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁用")])]),n("Tooltip",{staticStyle:{display:"inline-block !important"},attrs:{content:"当设为不始终显示时，一级菜单下仅有一个子级菜单只会显示该子级菜单，避免用户多次点击",placement:"right",transfer:"","max-width":"280"}},[n("Icon",{staticStyle:{"margin-left":"10px",cursor:"pointer"},attrs:{type:"md-help-circle",size:"20",color:"#c5c5c5"}})],1)],1):e._e(),n("FormItem",{attrs:{label:"是否启用",prop:"status"}},[n("i-switch",{attrs:{size:"large","true-value":0,"false-value":-1},model:{value:e.menuFormAdd.status,callback:function(t){e.$set(e.menuFormAdd,"status",t)},expression:"menuFormAdd.status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[e._v("启用")]),n("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁用")])])],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:e.cancelAdd}},[e._v("取消")]),n("Button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitAdd}},[e._v("提交")])],1)],1)],1)},s=[],r=n("365c"),i=n("6247"),a=n("c276"),l={name:"menu-manage",components:{IconChoose:i["default"]},data:function(){return{loading:!0,strict:!0,maxHeight:"500px",expandLevel:1,menuModalVisible:!1,iconModalVisible:!1,selectList:[],selectCount:0,showParent:!1,searchKey:"",parentTitle:"",editTitle:"",modalTitle:"",menuForm:{id:"",title:"",name:"",icon:"",path:"",component:"",parentId:"",buttonType:"",type:0,sortOrder:0,level:null,status:0,url:"",showAlways:!0},menuFormAdd:{buttonType:""},menuFormValidate:{title:[{required:!0,message:"名称不能为空",trigger:"blur"}],name:[{required:!0,message:"路由英文名不能为空",trigger:"blur"}],icon:[{required:!0,message:"图标不能为空",trigger:"click"}],path:[{required:!0,message:"路径不能为空",trigger:"blur"}],component:[{required:!0,message:"前端组件不能为空",trigger:"blur"}]},submitLoading:!1,data:[],dictPermissions:[]}},methods:{init:function(){this.getAllList(),this.getDictPermissions()},getDictPermissions:function(){var e=this;this.$route.meta.permTypes.includes("view")?Object(r["ab"])("permission_type").then((function(t){t.success&&(e.dictPermissions=t.result)})):this.loading=!1},renderContent:function(e,t){var n=this,o=(t.root,t.node,t.data),s="";return s=0==o.level?"ios-navigate":1==o.level?"md-list-box":2==o.level?"md-list":3==o.level?"md-radio-button-on":"md-radio-button-off",e("span",{style:{display:"inline-block",cursor:"pointer"},on:{click:function(){n.selectTree(o)}}},[e("span",[e("Icon",{props:{type:s,size:"16"},style:{"margin-right":"8px","margin-bottom":"3px"}}),e("span",{class:{"ivu-tree-title":!0,"ivu-tree-title-selected":o.id==this.menuForm.id}},o.title)])])},handleDropdown:function(e){"expandOne"==e?(this.expandLevel=1,this.getAllList()):"expandTwo"==e?(this.expandLevel=2,this.getAllList()):"expandThree"==e&&(this.expandLevel=3,this.getAllList()),"expandAll"==e?(this.expandLevel=4,this.getAllList()):"refresh"==e&&this.getAllList()},getAllList:function(){var e=this;this.$route.meta.permTypes.includes("view")?(this.loading=!0,this.getRequest("/permission/getAllList").then((function(t){if(e.loading=!1,t.success){var n=e.expandLevel;t.result.forEach((function(e){1==n?(0==e.level&&(e.expand=!1),e.children&&e.children.length>0&&e.children.forEach((function(e){1==e.level&&(e.expand=!1),e.children&&e.children.length>0&&e.children.forEach((function(e){2==e.level&&(e.expand=!1)}))}))):2==n?(0==e.level&&(e.expand=!0),e.children&&e.children.length>0&&e.children.forEach((function(e){1==e.level&&(e.expand=!1),e.children&&e.children.length>0&&e.children.forEach((function(e){2==e.level&&(e.expand=!1)}))}))):3==n&&(0==e.level&&(e.expand=!0),e.children&&e.children.length>0&&e.children.forEach((function(e){1==e.level&&(e.expand=!0),e.children&&e.children.length>0&&e.children.forEach((function(e){2==e.level&&(e.expand=!1)}))})))})),e.data=t.result}}))):this.loading=!1},search:function(){var e=this;this.searchKey?(this.loading=!0,Object(r["Hb"])({title:this.searchKey}).then((function(t){e.loading=!1,t.success&&(e.data=t.result)}))):this.getAllList()},selectTree:function(e){if(e&&e.id!=this.menuForm.id){for(var t in e)null==e[t]&&(e[t]="");var n=JSON.stringify(e),o=JSON.parse(n);this.menuForm=o,this.editTitle=o.title}else this.cancelEdit()},cancelEdit:function(){var e=this.$refs.tree.getSelectedNodes()[0];e&&(e.selected=!1),this.$refs.menuForm.resetFields(),this.menuForm.id="",delete this.menuForm.id,this.editTitle=""},cancelAdd:function(){this.menuModalVisible=!1},handleReset:function(){var e=this.menuForm.type;this.$refs.menuForm.resetFields(),this.menuForm.icon="",this.menuForm.component="",this.menuForm.type=e},submitEdit:function(){var e=this;this.$refs.menuForm.validate((function(t){if(t){if(!e.menuForm.id)return void e.$Message.warning("请先点击选择要修改的菜单节点");e.submitLoading=!0,null==e.menuForm.sortOrder&&(e.menuForm.sortOrder=""),null==e.menuForm.buttonType&&(e.menuForm.buttonType=""),1==e.menuForm.type&&(e.menuForm.name="",e.menuForm.icon="",e.menuForm.component=""),delete e.menuForm.children,Object(r["I"])(e.menuForm).then((function(t){e.submitLoading=!1,t.success&&(e.$Message.success("编辑成功"),e.$store.commit("setAdded",!1),a["a"].initRouter(e),e.init(),e.menuModalVisible=!1)}))}}))},submitAdd:function(){var e=this;this.$refs.menuFormAdd.validate((function(t){t&&(e.submitLoading=!0,1==e.menuFormAdd.type&&(e.menuFormAdd.name="",e.menuFormAdd.icon="",e.menuFormAdd.component=""),delete e.menuForm.children,Object(r["f"])(e.menuFormAdd).then((function(t){e.submitLoading=!1,t.success&&(e.$Message.success("添加成功"),e.$store.commit("setAdded",!1),a["a"].initRouter(e),e.init(),e.menuModalVisible=!1)})))}))},addMenu:function(){if(""!=this.menuForm.id&&null!=this.menuForm.id){this.parentTitle=this.menuForm.title,this.modalTitle="添加子节点(可拖动)",this.showParent=!0;var e=0;if(1==this.menuForm.level)e=0;else if(2==this.menuForm.level)e=1;else{if(3==this.menuForm.level)return void this.$Modal.warning({title:"抱歉，不能添加啦",content:"仅支持2级菜单目录"});e=0}this.menuFormAdd={icon:"",type:e,parentId:this.menuForm.id,level:Number(this.menuForm.level)+1,sortOrder:0,buttonType:"",status:0,showAlways:!0},0==this.menuForm.level&&(this.menuFormAdd.path="/",this.menuFormAdd.component="Main"),this.menuModalVisible=!0}else this.$Message.warning("请先点击选择一个菜单权限节点")},addRootMenu:function(){this.modalTitle="添加顶部菜单(可拖动)",this.showParent=!1,this.menuFormAdd={type:-1,level:0,sortOrder:0,status:0},this.menuModalVisible=!0},changeSelect:function(e){this.selectCount=e.length,this.selectList=e},delAll:function(){var e=this;this.selectCount<=0?this.$Message.warning("您还未勾选要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",onOk:function(){var t="";e.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),Object(r["x"])(t).then((function(t){t.success&&(e.$Message.success("删除成功"),e.$store.commit("setAdded",!1),a["a"].initRouter(e),e.selectList=[],e.selectCount=0,e.cancelEdit(),e.init())}))}})}},mounted:function(){var e=document.documentElement.clientHeight;this.maxHeight=Number(e-287)+"px",this.init()}},m=l,u=(n("d5b3"),n("2877")),d=Object(u["a"])(m,o,s,!1,null,null,null);t["default"]=d.exports},"50cc":function(e,t,n){},d5b3:function(e,t,n){"use strict";var o=n("50cc"),s=n.n(o);s.a}}]);