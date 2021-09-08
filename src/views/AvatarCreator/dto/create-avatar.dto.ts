import { GenderType, RenderType } from './../interface/avatar.interface';


// http://192.168.50.160:3000/avatar?renderer=svg&amount=1&size=500&gender=unset
export class CreateAvatarDto {
  // 渲染方式：影响放回结果
  // "0": svg
  // "1": jpeg
  // "2": base64
  renderer?: RenderType;
  
  // 随机生成的数量
  amount?: number;

  // 头像大小
  size?: number;

  // 性别偏好
  // "0": 随机
  // "1": 偏向男性
  // "2": 偏向女性
  gender?: GenderType;
}
