<template>
    <div class='page'>
        <div class='search-top'>
            <div class='search-header'>
                <div class='back'></div>
                <div class='search-wrap'>
                    <div class='search-icon'></div>
                    <div class='search-text'>大码女装</div>
                </div>
                <div class='screen-btn'>筛选</div>
            </div>
            <div class='order-main'>
                <div class='order-item active'>
                <div class="order-text">综合</div>
                <div class='order-icon'></div>
                <ul class='order-menu hide'>
                    <li class='active'>综合</li>
                    <li>价格从低到高</li>
                    <li>价格从高到低</li>
                </ul>
            </div>
            <div class='order-item active'>
            <div class="order-text">销量</div>
        </div>
    </div>
    </div>
    <div class='goods-main'>
        <div class='goods-list'>
            <div class='image'><img  src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" /></div>
            <div class='goods-content'>
                <div class='goods-title'>品牌男装</div>
                <div class='price'>¥100</div>
                <div class='sales'>销量<span>10</span>件</div>
            </div>
        </div>
        <div class='goods-list'>
            <div class='image'><img  src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" /></div>
            <div class='goods-content'>
                <div class='goods-title'>品牌男装</div>
                <div class='price'>¥100</div>
                <div class='sales'>销量<span>10</span>件</div>
            </div>
        </div>
        <div class='goods-list'>
            <div class='image'><img  src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" /></div>
            <div class='goods-content'>
                <div class='goods-title'>品牌男装</div>
                <div class='price'>¥100</div>
                <div class='sales'>销量<span>10</span>件</div>
            </div>
        </div>
        <div class='goods-list'>
            <div class='image'><img  src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" /></div>
            <div class='goods-content'>
                <div class='goods-title'>品牌男装</div>
                <div class='price'>¥100</div>
                <div class='sales'>销量<span>10</span>件</div>
            </div>
        </div>
        <div class="null-item">没有相关商品！</div>
    </div>
    <div ref="mask" class='mask' v-show="false"></div>
    <div ref="screen" class='screen unmove'>
    <div>
        <div class='attr-wrap'>
            <div class='attr-title-wrap'>
                <div class='attr-name'>分类</div>
                <div class='attr-icon'></div>
            </div>
            <div class='item-wrap'>
                <div class='item active'>潮流女装</div>
                <div class='item'>品牌男装</div>
                <div class='item'>数码产品</div>
                <div class='item'>品牌男装</div>
                <div class='item'>数码产品</div>
                <div class='item'>品牌男装</div>
                <div class='item'>数码产品</div>
                <div class='item'>品牌男装</div>
                <div class='item'>数码产品</div>
                <div class='item'>品牌男装</div>
                <div class='item'>数码产品</div>
                <div class='item'>品牌男装</div>
                <div class='item'>数码产品</div>
                <div class='item'>品牌男装</div>
                <div class='item'>数码产品</div>
            </div>
        </div>
        <div style='width:100%;height:1px;backgroundColor:#EFEFEF'></div>
        <div class='attr-wrap'>
            <div class='attr-title-wrap'>
                <div class='attr-name'>价格区间</div>
                <div class='price-wrap'>
                    <div class='price-input'><input type="tel" placeholder="最低价" value=""  /></div>
                    <div class='price-line'></div>
                    <div class='price-input'><input type="tel" placeholder="最高价" value=""  /></div>
                </div>
                <div class='attr-icon'></div>
            </div>
            <div class='item-wrap'>
                <div class='item active'>1-50</div>
                <div class='item'>51-99</div>
                <div class='item'>100-300</div>
                <div class='item'>301-1000</div>
                <div class='item'>1001-4000</div>
                <div class='item'>4001-9999</div>
            </div>
        </div>
        <div style='width:100%;height:0.3rem;backgroundColor:#EFEFEF'></div>
        <div>
            <div class='attr-wrap'>
                <div class='attr-title-wrap'>
                    <div class='attr-name'>颜色</div>
                    <div class='attr-icon up'></div>
                </div>
                <div class='item-wrap'>
                    <div class='item active'>白色</div>
                    <div class='item'>黑色</div>
                </div>
            </div>
            <div class='attr-wrap'>
                <div class='attr-title-wrap'>
                    <div class='attr-name'>尺码</div>
                    <div class='attr-icon up'></div>
                </div>
                <div class='item-wrap'>
                    <div class='item active'>30</div>
                    <div class='item'>40</div>
                </div>
            </div>
            <div style='width:100%;height:1px;backgroundColor:#EFEFEF'></div>
        </div>
        <div style='width:100%;height:1.2rem'></div>
    </div>
    <div class='handel-wrap'>
        <div class='item'>共<span>10</span>件</div>
        <div class='item reset'>全部重置</div>
        <div class='item sure'>确定</div>
    </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>
    .page{width:100%;height:auto;background-color:#FFFFFF;overflow:hidden;}
    .search-top{width:100%;position: fixed;z-index: 10;left:0px;top:0px;background-color:#FFFFFF;}
    .search-header{width:100%;height:0.8rem;border-bottom: 1px solid #EFEFEF;display: flex;display:-webkit-flex;justify-content: space-between;-webkit-justify-content: space-between;align-items: center;-webkit-align-items: center}
    .search-header .back{width:0.8rem;height:0.8rem;background-image:url('../../../assets/images/home/goods/back.png');background-size:100%;background-repeat: no-repeat;background-position: center;}
    .search-header .search-wrap{width:75%;background:#EAEAEA;height:80%;border-radius: 0.1rem;display:flex;display:-webkit-flex;align-items: center;-webkit-align-items: center;}
    .search-header .search-wrap .search-icon{width:0.5rem;height:0.5rem;background-image:url("../../../assets/images/common/search.png");background-repeat: no-repeat;background-size: 100%;background-position: center;margin-left:0.1rem;margin-right:0.2rem;}
    .search-header .search-wrap .search-text{width:90%;height:auto;font-size:0.32rem;}
    .search-header .screen-btn{width:auto;height:auto;font-size:0.32rem;margin-right:0.1rem;}

    .search-top .order-main{width:100%;height:0.8rem;border-bottom: 1px solid #EFEFEF;display:flex;display:-webkit-flex;align-items: center;-webkit-align-items: center;}
    .search-top .order-main .order-item{width:auto;height:auto;display:flex;display:-webkit-flex;margin-left:0.4rem;position: relative;z-index:1;}
    .search-top .order-main .order-item .order-text{font-size:0.32rem;}
    .search-top .order-main .order-item.active .order-text{color:#FDA208}
    .search-top .order-main .order-item .order-icon{width:0.35rem;height:0.35rem;background-image:url("../../../assets/images/home/goods/down.png");background-size:100%;background-position: center;background-repeat: no-repeat;margin-left:0.1rem;}
    .search-top .order-main .order-item.active .order-icon{background-image:url("../../../assets/images/home/goods/up.png");background-size:100%;background-position: center;background-repeat: no-repeat;}
    /*.search-top .order-main .order-item .order-icon.up{background-image:url("../../../../assets/images/home/goods/up.png");background-size:100%;background-position: center;background-repeat: no-repeat;}*/
    .search-top .order-main .order-item .order-menu{width:688%;height:auto;background-color:#FFFFFF;position: absolute;z-index:1;left:-35%;top:0.63rem;}
    .search-top .order-main .order-item .order-menu li{width:95%;height:0.8rem;border-bottom: 1px solid #EFEFEF;font-size:0.28rem;line-height:0.8rem;padding-left:0.4rem;}
    .search-top .order-main .order-item .order-menu li.active{color:#FDA208}

    .goods-main{width:100%;height:auto;margin-top:2rem;}
    .goods-main .goods-list{width:100%;height:2rem;display:flex;display:-webkit-flex;justify-content: space-between;-webkit-justify-content: space-between;overflow:hidden;margin-bottom: 0.4rem;}
    .goods-main .goods-list .image{width:2rem;height:2rem;margin-left:0.1rem;overflow:hidden;text-align:center;}
    .goods-main .goods-list .image img{width:auto;height:auto;max-height: 100%;max-height:100%;}
    .goods-main .goods-list .goods-content{width:67%;height:98%;border-bottom:solid 1px #cccccc;}
    .goods-main .goods-list .goods-title{width:95%;height:0.6rem;font-size:0.28rem;overflow:hidden;}
    .goods-main .goods-list .price{font-size:0.32rem;color:#F93036;margin-top:0.1rem;}
    .goods-main .goods-list .sales{font-size:0.24rem;color:#969696;margin-top:0.1rem;}
    .goods-main .goods-list .sales span{color:#FDA208}

    .mask{width:100%;height:100%;position: fixed;z-index:99;left:0px;top:0px;background-color:rgba(0,0,0,0.3)}
    .screen{width:80%;height:100%;position: fixed;z-index:100;right:0px;top:0px;background-color:#FFFFFF;transform: translateX(100%);-webkit-transform:translateX(100%);overflow:hidden;}
    .screen.move{transition: transform 0.3s;-webkit-transition: transform 0.3s;transform: translateX(0%);-webkit-transform: translateX(0%)}
    .screen.unmove{transition: transform 0.3s;-webkit-transition: transform 0.3s;transform: translateX(100%);-webkit-transform: translateX(100%)}
    .screen .attr-wrap{width:100%;}
    .screen .attr-wrap .attr-title-wrap{width:94%;height:0.8rem;display:flex;display:-webkit-flex;justify-content: space-between;-webkit-justify-content: space-between;align-items: center;-webkit-align-items:center;padding-left:0.2rem;padding-right:0.2rem;}
    .screen .attr-wrap .attr-title-wrap .attr-name{font-size:0.32rem;}
    .screen .attr-wrap .attr-title-wrap .attr-icon{width:0.4rem;height:0.4rem;background-image:url("../../../assets/images/home/goods/down.png");background-size:100%;background-repeat: no-repeat;background-position: center;}
    .screen .attr-wrap .attr-title-wrap .attr-icon.up{background-image:url("../../../assets/images/home/goods/up.png");background-size:100%;background-repeat: no-repeat;background-position: center;}
    .screen .attr-wrap .attr-title-wrap .price-wrap{width:auto;height:auto;display:flex;display:-webkit-flex;align-items: center;-webkit-align-items: center;margin-left:18%;}
    .screen .attr-wrap .attr-title-wrap .price-wrap .price-input{width:1rem;height:0.4rem;border:1px solid #EFEFEF}
    .screen .attr-wrap .attr-title-wrap .price-wrap .price-input input{width:100%;height:89%;font-size:0.28rem;}
    .screen .attr-wrap .attr-title-wrap .price-wrap .price-line{width:0.4rem;height:1px;background-color:#EFEFEF;margin-left:0.1rem;margin-right:0.1rem;}
    .screen .attr-wrap .item-wrap{width:100%;display:flex;display:-webkit-flex;flex-wrap: wrap;-webkit-flex-wrap:wrap;}
    .screen .attr-wrap .item-wrap .item{width:30%;height:0.64rem;background-color:#EFEFEF;text-align: center;line-height:0.64rem;overflow:hidden;font-size:0.28rem;border-radius: 0.1rem;margin-left:2%;margin-right:1%;margin-bottom: 0.2rem;}
    .screen .attr-wrap .item-wrap .item.active{color:#FFFFFF;background-color:#FDA208;}
    .screen .handel-wrap{width:100%;height:1rem;background-color:#FFFFFF;border-top:1px solid #EFEFEF;position:absolute;z-index:1;left:0px;bottom:0px;display:flex;display:-webkit-flex;}
    .screen .handel-wrap .item{width:auto;height:100%;font-size:0.28rem;text-align: center;line-height:1rem;flex:1;-webkit-flex:1}
    .screen .handel-wrap .item span{color:#FDA208}
    .screen .handel-wrap .item.reset{background-color:#EFEFEF}
    .screen .handel-wrap .item.sure{background-color:#FDA208;color: #FFFFFF}
</style>
