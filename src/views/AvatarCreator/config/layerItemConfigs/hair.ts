import { avaiableColors } from "./../avaiable-colors";
import { GenderType, LAYER_ID } from "./../../interface/avatar.interface";
import { LayerItemConfig } from "./../../interface/layer.interface";
const hairConfig: LayerItemConfig[] = [
  {
    filename: "Danny Phantom",
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },

  {
    filename: "Doug Funny",
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: "Fonze",
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: "Full",
    genderType: GenderType.FEMAL,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.SHIRT],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },

  {
    filename: "Mr Clean",
    genderType: GenderType.MALE,
    weight: 10,
  },

  {
    filename: "Mr T",
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },

  {
    filename: "Pixie",
    genderType: GenderType.FEMAL,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },

  {
    filename: "Turban",
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
];
export default hairConfig;
