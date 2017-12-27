<template>
    <div>
        <ul>
            <li class="row">
                <div class="item one">
                    1
                </div>
                <div class="item two">
                    2
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    .row{
        .item{
            text-align: center;
            &.one{
                background-color: yellow;
                width:20rem;
                width: 20vw;
                font-size: 10vw;
            }
            &.two{
                background-color: green;                
            }
        }
    }
</style>
