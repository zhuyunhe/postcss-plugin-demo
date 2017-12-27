<template>
  <div id="app">
    
    <List></List>
    
    <div class="test"></div>

  </div>
</template>

<script>

import List from './components/list'
import Header from './components/header'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    List
  },
  methods:{
    changeChannel(event,index){

      if(!this.scrollCon){
        this.scrollCon = document.querySelector('.channel-swipe')
      }
      
      if(this.currentIndex === index) return
      let windowAxis = parseInt( window.innerWidth/2 )
      let elm = event.target
      if(elm){
        let parentElm = elm.parentElement
        let elmRect = elm.getBoundingClientRect()

        let parentElmRect = parentElm.getBoundingClientRect()
        let totalWidth = parentElmRect.width
        let elmAxis = parseInt(elmRect.x + elmRect.width/2 + Math.abs(parentElmRect.x))

        // debugger
        if(elmAxis > Math.abs(parentElmRect.x) + windowAxis){
          console.group('右')
          console.log('elmAxis: ' + elmAxis)
          console.log('windowAxis: ' + windowAxis)
          console.log('parentElmRect.x: ' + Math.abs(parentElmRect.x))
          
          this.distance = elmAxis - (windowAxis)
          if(this.distance > 0 && this.distance < this.maxDistance){
            // this.scrollCon.scrollLeft = this.distance
            this.styleObject.transform = `translate(-${this.distance}px,0)`
            
          }else if(this.distance > this.maxDistance){
            this.distance = this.maxDistance

            this.styleObject.transform = `translate(-${this.distance}px,0)`
                    
          }
          console.log('distance: ' + this.distance)
          console.groupEnd()          
        } else{
          console.group('左')
          console.log('elmAxis: ' + elmAxis)
          console.log('windowAxis: ' + windowAxis)
          console.log('distance: ' + this.distance)
          console.groupEnd()   
          if( this.distance <= 0 ){
            //不能再往左边去啦
          }else {
              this.distance -= (this.distance + windowAxis - elmAxis)
              this.distance = this.distance>=0 ? this.distance : 0
              this.styleObject.transform = `translate(-${this.distance}px,0)`
          }

          /* if(this.distance>0){
            if(this.distance > (windowAxis - elmAxis)){
              this.distance -=  windowAxis - elmAxis
            } else{
              this.distance = 0
            }
            
            if(this.distance >= 0){
              this.styleObject.transform = `translate(-${this.distance}px,0)`
              // this.scrollCon.scrollLeft = this.distance
              
            console.log(this.distance)
              
            }

          } */
        }

      }
      this.currentIndex = index
    }
  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>
body{
  margin: 0;
}
*{
    margin: 0;
    padding: 0;
}
ul li{
    text-decoration: none;
}

.test{
    width: 100px;
    height: 100px;
}

</style>
