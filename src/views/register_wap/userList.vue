<template>
    <div class="wap-wrap list-wrap">
        <div class="wrapheader">
            <!--
             <span class="close"></span>
             -->
             <span class="close back" @click="back"></span>
            <div class="pageTitle line-ellipsis">登记列表</div>
            <span class="list-icon"></span>
        </div>
      
        <div class="userList">
              <ul class="infinite-list user-list" v-infinite-scroll="load" style="overflow:auto">
                <li class="search-In">
                    <input placeholder="请输入电话号码"  v-model="phone" maxlength='11' v-limitNum/>
                    <a class="search" @click="search"></a>
                </li>
                <li v-for="(item,index) in userList" :key="index">
                   <div class="box-flex">
                       <div class="user_name line-ellipsis"><span>姓名：{{item.name}}</span></div>
                       <div><span>性别：{{item.sex}}</span></div>
                    </div>
                   <div>电话：{{item.phone}}</div>
                  
                   <div class="line-ellipsis">公司地址：{{item.address}}</div>
                </li>
            </ul>
           
        </div>
         <p class="list_mess" v-if="loading">加载中...</p>
         <p class="list_mess" v-if="noMore">没有更多了</p>

    </div>
</template>

<script >
import { saveRegister, getRegister, getRegisterId, getRegisters, hasPhone} from "@/api/dapps.js";
import { getTransaction, sendTransaction } from '@/api/dapps'
 import {utils} from '@/assets/js/pattern'
export default{


   data(){
       return{
        gender:1,
        loading: false,
        noMore:false,

        phone:'',//电话号码
        userList:[
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
            // {name:'李三思',sex:'男',phone:'18018609087',address:'江苏省常州市新北区绿都万和城'},
        ],
        allList:[],

       }
   },
   methods:{

       //搜素
       search(){
          let that = this;  
          if (utils.isNullOrEmpty(that.phone)) {
            that.userList = that.allList;  
            return
          }
          let tempList=[];
          that.allList.forEach((item)=>{
              if (item.phone.indexOf(that.phone) != -1){
                  tempList.push(item)
              }
          })
          that.userList = tempList;
       },
       back(){
        let that = this;
        if (window.history.length <= 1) {
                this.$router.push({ path: "/register_wap" });
                return false;
            } else {
                this.$router.go(-1);
            }
       },
       load () {
        this.loading = true
        setTimeout(() => {

       
          this.loading = false
        }, 2000)
        let temp =this.userList
        //this.userList.concat(temp)
      
      },
      async showList(){
         let that = this;
         let registers = await getRegisters();
         if (registers.length == 0){
              return;
         }
         if (registers == ''){
           return this.$toast('暂无内容', 3000)
         }
        registers.sort(function(a,b){
                return a.username.localeCompare(b.username);
            });
        registers.forEach((item)=>{
            that.userList.push({name:item.username, sex:item.sex, phone:item.phone, address:item.designation})
        });
        that.allList = that.userList;
       },
   },
   mounted(){
     let that = this;
     that.showList();
   }
}
</script>

<style lang="less" scoped>
   @import url(../../assets/less/wap.less);
</style>