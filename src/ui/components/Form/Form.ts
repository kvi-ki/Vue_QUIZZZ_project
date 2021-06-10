import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/ui/components/Card/Card.vue';

@Component({
    components: {
        Card,
    }
})

export default class Form extends Vue {
    @Prop()
    name!: string
    @Prop()
   email!: string
   @Prop()
   hero = "Would you like to choose a Hero?"
   @Prop()
   image!: string
   @Prop()
   level!: string
//    @Prop()
//    reg!: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/

   @Prop()
   playersName!: string
   @Prop()
   playersEmail!: string
   @Prop()
   playersHero!: string
   @Prop()
   playersImage!: string
   @Prop()
   playersLevel!: string
   @Prop()
   seen!: boolean
   @Prop()
    value!: string
    @Prop()
    options!: []
    
    // hero_chosen = "Would you like to choose a Hero?"
    heroes = ['Yes', 'No, I prefer my own image/photo']

   createCard(e:Event){
    e.preventDefault();
    this.$router.push('/cardpage')
    this.playersHero = this.hero
    this.playersImage = this.image
    this.playersName = this.name
    this.playersEmail = this.email
    this.playersLevel = this.level
   }

//    isValidEmail() {
//     return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
//    }
}