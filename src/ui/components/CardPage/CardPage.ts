import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "../Header/Header.vue";
import Card from "../Card/Card.vue";
import Footer from "../Footer/Footer.vue";

@Component({
  components: {
    Header,
    Card,
    Footer,
  },
})

export default class CardPage extends Vue {
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
}
