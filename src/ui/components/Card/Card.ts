import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {
    }
})

export default class Card extends Vue {
   @Prop()
   playersName!: string
   @Prop()
   playersImage!: string
   @Prop()
   playersEmail!: string
   @Prop()
   playersLevel!: string

   @Prop()
    name!: string
    @Prop()
   email!: string
   @Prop()
   hero!: string
   @Prop()
   image!: string
   @Prop()
   level!: string

}