<script setup>
    import Button from '@/components/Utils/Button.vue'
    import SecundaryButton from '@/components/Utils/SecundaryButton.vue'
    import {RouterLink} from 'vue-router'; 
</script>

<template>
    <main>
        <img class="logo-img" src="@/assets/img/LOGO.png" alt="">
        <div class="cta-container">
            <img class="splash-img" src="@/assets/img/Icon.png" alt="">
            <h1>Non-Contact Deliveries</h1>
            <p>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
</p>
            <div class="div-action">
                <RouterLink to="/home">
                    <Button title="Order now"></Button>    
                </RouterLink>
            </div>

            <div class="div-action">
                <Button title="Dimissis"></Button>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main{
        width: 100%;
        background: url('@/assets/img/BG.png'); 
        height: 100vh;
        background-color: #a259ff;
    }

    .logo-img{
        padding-top: 2rem;
        width: 30%;
        height: 17%;
    }

    .cta-container{
        width: 100%;
        background-color: #f5f5f5;
        padding: 2rem;
        border-radius: 24px 24px 0px 0px;
        height: calc(90vh - 148px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
    }
    h1{
        margin-top: 24px;
        text-align: center;
        font-size: 34px;
        font-weight: bold;
        color: rgba(45, 12, 87, 1);
        line-height: 41px;
    }
    p{
        font-size: 17px;
        text-align: center;
        color: rgba(149, 134, 168, 1);
        margin-top: 12px;
    }
    .splash-img{
        height: 104px;
        width: 104px;
    }
    .div-action{
        width: 100%;
    }
</style>