import { avaiableColors } from './../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const backgroundConfig: LayerItemConfig[] = [
  {
    filename: 'clean',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 10,
  },

  {
    filename: 'pattern1',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 1,
  },
  {
    filename: 'pattern2',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 1,
  },
  {
    filename: 'pattern3',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 1,
  },
  {
    filename: 'pattern4',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 1,
  },
  {
    filename: 'pattern5',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 1,
  },
  {
    filename: 'pattern6',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 1,
  },
  {
    filename: 'pattern7',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 1,
  },
  {
    filename: 'pattern8',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 1,
  },
  {
    filename: 'pattern9',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 1,
  },

  // 新年限定
  // {
  //   filename: 'Firecrackers',
  //   genderType: GenderType.UNSET,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
  //   weight: 1,
  // },
  // 新年限定
  // {
  //   filename: 'fu',
  //   genderType: GenderType.UNSET,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
  //   weight: 1,
  // },
  // 新年限定
  // {
  //   filename: 'lanterns',
  //   genderType: GenderType.UNSET,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
  //   weight: 1,
  // }
];

export default backgroundConfig;
