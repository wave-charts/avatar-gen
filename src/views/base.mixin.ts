import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class BaseMixin extends Vue {
  @Prop({ type: Number, default: 380 }) readonly width!: number;
  @Prop({ type: Number, default: 380 }) readonly height!: number;
  @Prop({ type: String }) readonly fill!: string;
}
