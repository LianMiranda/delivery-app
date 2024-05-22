<script setup>
  import {Menu, ShoppingCart, Avatar} from '@element-plus/icons-vue'
  import CategoriesView from '@/views/CategoriesView.vue'
</script>

<template>
  <main>
    
      <el-tabs tab-position="bottom" class="menu-tabs">
          <el-tab-pane>
            <template #label>
              <span class="custom-tabs-label">
                <Menu style="width: 24px; height: 24px"></Menu>          
              </span>
            </template>
            <CategoriesView/>
          </el-tab-pane>
          
          <el-tab-pane>
            <template #label>
              <span class="custom-tabs-label">
                <ShoppingCart style="width: 24px; height: 24px"></ShoppingCart>
              </span>
            </template>
            Carrinho de compras
          </el-tab-pane>
  
          <el-tab-pane>
            <template #label>
              <span class="custom-tabs-label">
                <Avatar style="width: 24px; height: 24px"></Avatar>
              </span>
            </template>
            Perfil
          </el-tab-pane>
      </el-tabs> 

  </main>
</template>

<style>
  main{
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
  }

  .menu-tabs > .el-tabs__header{
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1;
  }
  .el-tabs__nav-wrap, 
  .el-tabs__nav-scroll,
  .el-tabs__nav{
    width: 100%;
  }
  .el-tabs{
        width: 100%;
  }
  .el-tabs__nav{
    justify-content: space-around;
    height: 80px;
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(217, 208, 227, 1);
    background-color: white
  }
  .el-tabs__item:hover {
    color: rgba(114, 3, 255, 0.5);
    cursor: pointer;
}
  .el-input__wrapper  {
        width: 350px;
        height: 48px;
        border-radius: 40px;
        border: 1px solid #f5f5f5;
    }

</style>
